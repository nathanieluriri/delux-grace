"use client";

import {
  Checkbox,
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { FC, ReactNode, useMemo, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FiCheck, FiEye, FiEyeOff } from "react-icons/fi";
import PhoneNumberInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface InputFieldProps {
  type:
    | "text"
    | "email"
    | "textarea"
    | "select"
    | "autocomplete"
    | "password"
    | "checkbox"
    | "switch"
    | "radio"
    | "number"
    | "phoneNumber"
    | "passCode"
    | "amount"
    | "color"
    | "weight"
    | "image"
    | "search"
    | "postal-code";
  startContent?: ReactNode;
  endContent?: ReactNode;
  label?: string | ReactNode;
  value?: string | boolean;
  disabled?: boolean;
  defaultValue?: string | number;
  maxLength?: number;
  switchSize?: "sm" | "md";
  codeLength?: number;
  rows?: number;
  allowShowPassword?: boolean;
  onChange?: (arg0: any) => void;
  defaultChecked?: boolean;
  name?: string;
  options?: {
    value: string;
    label: string;
    className?: string;
    endIcon?: ReactNode;
    disabled?: boolean;
  }[];
  autoComplete?: string;
  placeholder?: string;
  register?: any;
  errorMessage?: any;
  isName?: boolean;
  isUsername?: boolean;
  className?: string;
  classNames?: {
    label?: string;
    input?: string;

    base?: string;
  };
  noWhiteSpace?: boolean;
  prefixFieldLabel?: ReactNode;
  min?: number;
  isRequired?: boolean;
  renderLabelRight?: boolean;
  renderLabelLeft?: boolean;
  control?: any;
}

const InputField: FC<InputFieldProps> = ({
  type,
  label,
  value,
  rows = 4,
  maxLength,

  disabled = false,
  defaultChecked = false,
  allowShowPassword = true,
  defaultValue,
  onChange = () => null,

  options,
  placeholder,
  register,
  errorMessage,
  noWhiteSpace = false,
  renderLabelRight = false,
  renderLabelLeft = false,
  min = 1,
  startContent = null,
  endContent = null,
  className = "",
  classNames = { label: "", input: "", base: "" },
  isName = false,
  isUsername = false,
  isRequired = false,
  autoComplete = "off",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredOptions = useMemo(
    () =>
      searchTerm === ""
        ? options
        : options?.filter((person) => {
            return person.label
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
          }),
    //   eslint-disable-next-line
    [searchTerm]
  );
  const listBoxButtonRef = useRef<any>(null);
  const comboBoxButtonRef = useRef<any>(null);

  const baseClass = `w-full p-3 block text-nevada w-full rounded-xl !outline-[0.5px] outline-gray-700 focus:outline-amber-500 ${
    startContent ? "rounded-l-none outline-amber-500 outline-l-none" : ""
  } ${endContent ? "rounded-r-none outline-amber-500 outline-r-none" : ""}  ${
    !!errorMessage
      ? "!bg-red-100 outline-red-500"
      : " !bg-transparent focus:!bg-transparent outline focus:!outline-secondary "
  } ${classNames.input} ${disabled ? "cursor-not-allowed" : ""}`;

  const renderInput = () => {
    switch (type) {
      case "text":
        return (
          <input
            disabled={disabled}
            type="text"
            className={`${baseClass} `}
            {...register}
            value={value ?? register?.value}
            defaultValue={defaultValue ?? register?.defaultValue}
            maxLength={maxLength}
            onChange={(e) => {
              if (isName) {
                e.target.value =
                  e.target.value.charAt(0).toUpperCase() +
                  e.target.value.slice(1);
                e.target.value = e.target.value.replace(/\s+/, "");
              }
              if (isUsername) {
                e.target.value = e.target.value.toLowerCase();
                e.target.value = e.target.value.replace(/\s+/, "");
              }
              if (noWhiteSpace) {
                e.target.value = e.target.value.replace(/\s/g, "");
              }
              register.onChange(e);
            }}
            placeholder={placeholder}
          />
        );
      case "email":
        return (
          <input
            type="email"
            className={`${baseClass} `}
            maxLength={maxLength}
            {...register}
            disabled={disabled}
            value={value ?? register?.value}
            onChange={(e) => {
              e.target.value = e.target.value.toLowerCase().replace(/\s/g, "");
              register.onChange(e);
            }}
            onKeyDown={(e) => {
              if (e.key === " ") {
                e.preventDefault();
              }
            }}
            placeholder={placeholder}
          />
        );
      case "textarea":
        return (
          <textarea
            className={`${baseClass} `}
            rows={rows}
            maxLength={maxLength}
            {...register}
            value={value ?? register?.value}
            onChange={(e) => {
              register?.onChange(e);
              if (onChange) onChange(e);
            }}
            placeholder={placeholder}
          />
        );
      case "password":
        return (
          <div className="relative w-full">
            <input
              disabled={disabled}
              type={showPassword ? "text" : "password"}
              className={`${baseClass} `}
              {...register}
              value={value ?? register?.value}
              onChange={(e) => {
                e.target.value = e.target.value.replace(/\s/g, "");
                register.onChange(e);
              }}
              onKeyDown={(e) => {
                if (e.key === " ") {
                  e.preventDefault();
                }
              }}
              placeholder={placeholder}
            />
            {allowShowPassword && (
              <button
                type="button"
                aria-label={showPassword ? "Hide Password" : "Show Password"}
                className="absolute inset-y-0 right-0 p-2 text-nevada"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            )}
          </div>
        );
      case "select":
        return (
          <>
            <Listbox
              value={value}
              onChange={({ value }: any) => {
                onChange(value);
              }}
              as="div"
              className="w-full relative"
            >
              <ListboxButton
                disabled={disabled}
                className="group relative border flex justify-between items-center w-full focus:border-amber-500 rounded-xl p-2"
                ref={listBoxButtonRef}
              >
                {options?.find((each) => each.value == value)?.label ||
                  "Select..."}
                <FaChevronDown className="text-amber-500" />
              </ListboxButton>
              <ListboxOptions
                anchor="bottom"
                className={`bg-transparent border transform translate-y-1 border-amber-500 rounded-xl [--anchor-gap:var(--spacing-1)] focus:outline-none transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 `}
                style={{
                  width: `${
                    listBoxButtonRef.current?.offsetWidth + "px" || ""
                  }`,
                }}
              >
                {placeholder && (
                  <ListboxOption
                    disabled
                    value=""
                    className="group flex items-center gap-2 rounded-xl py-1.5 px-3 bg-transparent select-none data-[focus]:bg-amber-500 data-[focus]:text-white hover:bg-amber-500 hover:text-white cursor-pointer"
                  >
                    <FiCheck className="invisible size-4 group-data-[selected]:visible" />
                    <div className="text-sm/6 ">{placeholder}</div>
                  </ListboxOption>
                )}
                {options?.map((item) => (
                  <ListboxOption
                    key={item.value}
                    value={item}
                    className="group flex items-center gap-2 rounded-xl py-1.5 px-3 bg-transparent select-none data-[focus]:bg-amber-500 data-[focus]:text-white hover:bg-amber-500 hover:text-white cursor-pointer"
                  >
                    <FiCheck className="invisible size-4 group-data-[selected]:visible" />
                    <div className="text-sm/6 ">{item.label}</div>
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Listbox>
          </>
        );
      case "autocomplete":
        return (
          <>
            <Combobox value={value} onChange={onChange}>
              <div
                className="relative border focus:border-amber-500 rounded-xl p-2 w-full"
                tabIndex={-1}
                ref={comboBoxButtonRef}
              >
                <ComboboxInput
                  displayValue={(value: any) =>
                    options?.find((each) => each.value == value)?.label as any
                  }
                  onChange={(event) => setSearchTerm(event.target.value)}
                  className={"border-0 outline-none bg-transparent w-full"}
                />
                <ComboboxButton className=" group absolute inset-y-0 right-0 my-1 px-2.5 border-l">
                  <FaChevronDown className="text-amber-500" />
                </ComboboxButton>
              </div>
              <ComboboxOptions
                anchor="bottom"
                className="bg-transparent border border-amber-500 rounded-xl [--anchor-gap:var(--spacing-1)] focus:outline-none transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 w-inherit "
                style={{ width: comboBoxButtonRef.current?.offsetWidth + "px" }}
              >
                {filteredOptions?.map((item) => (
                  <ComboboxOption
                    key={item.value}
                    value={item.value}
                    className="group flex items-center gap-2 rounded-xl py-1.5 px-3 bg-transparent select-none data-[focus]:bg-amber-500 data-[focus]:text-white hover:bg-amber-500 hover:text-white cursor-pointer"
                  >
                    <FiCheck className="invisible size-4 group-data-[selected]:visible" />
                    <div className="text-sm/6 ">{item.label}</div>
                  </ComboboxOption>
                ))}
              </ComboboxOptions>
            </Combobox>
          </>
        );
      case "checkbox":
        return (
          <Checkbox
            defaultChecked={defaultChecked}
            className="p-0.5 rounded-md border cursor-pointer text-white data-[checked]:bg-amber-500"
            disabled={disabled}
            color="secondary"
            checked={Boolean(value)}
            onChange={onChange}
          >
            <FiCheck />
          </Checkbox>
        );
      case "radio":
        return (
          <input
            disabled={disabled}
            type="radio"
            name="inventory"
            id="out-stock"
            className="w-4 h-4 accent-black"
            value={value}
            defaultChecked={defaultChecked}
            {...register}
            onChange={onChange}
          />
        );
      case "number":
        return (
          <input
            disabled={disabled}
            type="number"
            min={min}
            className={`${baseClass} `}
            {...register}
            // onChange={(e) => {
            //   const newValue = e.target.value
            //   const parsedValue = parseFloat(newValue)
            //   if (!isNaN(parsedValue)) {
            //     register?.onChange({
            //       target: {
            //         value: parsedValue,
            //       },
            //     })
            //     if (onChange) onChange(e)
            //   }
            // }}
            value={register?.value ?? value}
            defaultValue={register?.defaultValue ?? defaultValue}
            placeholder={placeholder}
          />
        );
      case "phoneNumber":
        return (
          <>
            <PhoneNumberInput
              disabled={disabled}
              country={"ng"}
              buttonClass="select-country-code-button !bg-white !rounded-l-lg"
              regions={["america", "europe", "asia", "oceania", "africa"]}
              enableSearch={true}
              disableSearchIcon={true}
              dropdownClass="text-gray-800"
              inputProps={{
                className: `${baseClass} pl-12`,
              }}
              countryCodeEditable={false}
              onChange={(value: string) => onChange(value)}
              value={value as string}
              placeholder={placeholder}
            />
          </>
        );
      case "amount":
        return (
          <div className={`${baseClass} pl-12 `} tabIndex={-1}>
            <p className="px-4 py-2 text-nevada bg-gray-100 border-r">₦</p>
            <input
              disabled={disabled}
              type="number"
              min={min}
              className={`text-gray-700 p-2 w-full rounded-sm border border-amber-500`}
              placeholder={placeholder}
              {...register}
              defaultValue={
                register?.defaultValue ? register?.defaultValue : defaultValue
              }
            />
          </div>
        );
      case "weight":
        return (
          <div className="flex rounded-sm border border-amber-500">
            <input
              disabled={disabled}
              type="number"
              min={min}
              className={`${baseClass} pl-12 `}
              placeholder={placeholder}
              {...register}
            />
            <p className="px-4 py-2 text-nevada bg-gray-100 border-r">kg</p>
          </div>
        );
      case "image":
        return (
          <div className="">
            <input
              disabled={disabled}
              type="file"
              accept=".jpg, .jpeg, .png"
              className={`hidden`}
              {...register}
              onChange={(e) => {
                onChange(e);
                register.onChange(e);
              }}
            />
          </div>
        );
      case "postal-code":
        return (
          <input
            disabled={disabled}
            type="text"
            className={`text-gray-700 p-2 w-full rounded-sm border border-amber-500 ${
              !!errorMessage ? "border-red-400" : "focus:border-green-500"
            }`}
            {...register}
            value={value ?? register?.value}
            defaultValue={defaultValue ?? register?.defaultValue}
            maxLength={10}
            onChange={(e) => {
              const newValue = e.target.value.replace(/\D/g, "");
              register?.onChange({
                target: {
                  value: newValue,
                },
              });
              if (onChange) onChange(newValue);
            }}
            placeholder={placeholder}
            autoComplete={autoComplete}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={`space-y-1 ${className} `}>
      <label
        className={`relative text-sm font-medium text-nevada ${
          type == "radio" ||
          type == "checkbox" ||
          type == "switch" ||
          renderLabelRight ||
          renderLabelLeft
            ? "flex items-center gap-1 space-y-0"
            : "space-y-1 "
        } ${classNames.base} font-oxygen ${
          disabled ? "cursor-not-allowed" : ""
        }`}
      >
        {type == "radio" ||
        type == "checkbox" ||
        type == "switch" ||
        renderLabelRight ? (
          <p className={`order-2 text-amber-500 ${classNames.label}`}>
            {label} {isRequired && <span className="text-red-700">*</span>}
          </p>
        ) : renderLabelLeft ? (
          <p className={`order-1 text-amber-500 ${classNames.label}`}>
            {label} {isRequired && <span className="text-red-700">*</span>}
          </p>
        ) : (
          <p>
            <span className={`text-amber-500 ${classNames.label}`}>
              {label}
            </span>
            {isRequired && <span className="text-red-700">*</span>}
          </p>
        )}
        <div className={type !== "passCode" ? "flex" : ""}>
          {startContent && (
            <div className="bg-transparent grid place-items-center p-2.5 rounded-l-lg border border-r-0 text-nevada">
              {startContent}
            </div>
          )}
          {renderInput()}
          {endContent && !["autocomplete", "password"].includes(type) && (
            <div className="bg-gray-100 grid place-items-center p-2 rounded-r-lg border border-amber-500 text-nevada cursor-pointer">
              {endContent}
            </div>
          )}
        </div>
      </label>
      <p className="pl-1 text-sm text-red-400">{errorMessage}</p>
    </div>
  );
};

export default InputField;
