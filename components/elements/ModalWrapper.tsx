"use client";
import Card from "@/components/elements/Card";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import type { FC, ReactNode } from "react";
import { FiX } from "react-icons/fi";

export interface BaseModalProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

interface ModalWrapperProps {
  className?: string;
  children: ReactNode;
  footer?: ReactNode;
  title?: ReactNode;
}

const ModalWrapper: FC<ModalWrapperProps & BaseModalProps> = ({
  isOpen,
  setIsOpen,
  className = "",
  title,
  footer,
  children,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className={`relative z-50 ${className}`}
    >
      <div className="fixed top-0 left-0 w-screen h-screen bg-white/10 backdrop-blur " />
      <div className="fixed inset-0 flex w-screen items-center justify-center ">
        <DialogPanel className="max-w-lg z-50 shadow-lg  overflow-hidden mx-4">
          <Card className="!p-5 space-y-4">
            <DialogTitle className="font-bold flex gap-3">
              <span className="text-xl flex-grow">{title}</span>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-white rounded-full p-1 px-1.5 text-gray-950"
              >
                <FiX size={15} />
              </button>
            </DialogTitle>
            {children}
            {footer}
          </Card>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
export default ModalWrapper;
