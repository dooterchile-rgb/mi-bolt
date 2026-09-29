import { X } from 'lucide-react';
import { useEffect } from 'react';

interface LegalModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function LegalModal({ open, onClose, title, children }: LegalModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in-up"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <h3 className="text-xl font-bold text-[#0a1f17]">{title}</h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#6b7c72] hover:bg-gray-100 hover:text-[#0a1f17] transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="px-6 py-5 overflow-y-auto text-sm text-[#6b7c72] leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
}
