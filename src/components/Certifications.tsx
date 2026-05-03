import React, { useState } from "react";
import { motion } from "motion/react";
import { Download, ExternalLink, X } from "lucide-react";
import { BentoCard } from "./BentoCard";

// Use Vite's import.meta.glob to dynamically import all PDFs from public/certifications/
const pdfModules = import.meta.glob('/public/certifications/*.pdf', { query: '?url', import: 'default', eager: true });

interface CertificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  url: string;
}

const CertificationModal: React.FC<CertificationModalProps> = ({ isOpen, onClose, title, url }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        <div className="flex justify-between items-center p-6 border-b border-slate-200">
          <h3 className="text-xl font-bold">{title}</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-6">
          <embed
            src={url}
            type="application/pdf"
            width="100%"
            height="600px"
            className="rounded-lg border border-slate-200"
          />
        </div>
      </div>
    </div>
  );
};

const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<{ title: string; url: string } | null>(null);

  // Get the list of PDFs
  const certifications = Object.entries(pdfModules).map(([path, url]) => {
    const filename = path.split('/').pop()?.replace('.pdf', '') || '';
    const title = filename.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()); // Capitalize words
    return {
      title,
      url: url as string,
      filename
    };
  });

  return (
    <>
      <BentoCard id="certifications" className="md:col-span-4 p-10">
        <div className="mono-label mb-10 text-center">Certifications</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-blue-200 transition-all p-6 group cursor-pointer"
              onClick={() => setSelectedCert({ title: cert.title, url: cert.url })}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-900 border border-slate-200 shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-all">
                  <Download size={24} />
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2 tracking-tight">{cert.title}</h4>
              <p className="text-slate-500 text-sm mb-4">Click to view certificate</p>
              <div className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
                View Certificate <ExternalLink size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </BentoCard>

      <CertificationModal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.title || ''}
        url={selectedCert?.url || ''}
      />
    </>
  );
};

export default Certifications;