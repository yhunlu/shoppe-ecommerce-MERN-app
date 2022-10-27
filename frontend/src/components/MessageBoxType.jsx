import {
  CheckCircleIcon,
  ExclamationIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/solid';
import React from 'react';

const MessageBoxType = ({ variant, children }) => {
  return (
    <>
      {/* Info */}
      {variant === 'info' && (
        <div className="rounded-md bg-blue-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <InformationCircleIcon
                className="h-5 w-5 text-blue-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <div className="mt-2 text-sm text-blue-700">
                <p>{children}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Success */}
      {variant === 'success' && (
        <div className="rounded-md bg-green-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <CheckCircleIcon
                className="h-5 w-5 text-green-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <div className="mt-2 text-sm text-green-700">
                <p>{children}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Danger */}
      {variant === 'danger' && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <XCircleIcon
                className="h-5 w-5 text-red-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <div className="mt-2 text-sm text-red-700">
                <p>{children}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Warning */}
      {variant === 'warning' && (
        <div className="rounded-md bg-yellow-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <ExclamationIcon
                className="h-5 w-5 text-yellow-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <div className="mt-2 text-sm text-yellow-700">
                <p>{children}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageBoxType;
