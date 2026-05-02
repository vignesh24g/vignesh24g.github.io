/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      // Reset after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-6 space-y-4 animate-in fade-in zoom-in duration-300">
        <CheckCircle2 className="text-green-500 w-12 h-12" />
        <h3 className="text-xl font-bold">Message Sent!</h3>
        <p className="text-slate-500 text-sm italic">I'll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-full space-y-4">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest px-1">Name</label>
            <input 
              required
              type="text" 
              placeholder="John Doe"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest px-1">Email</label>
            <input 
              required
              type="email" 
              placeholder="john@example.com"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest px-1">Message</label>
          <textarea 
            required
            rows={3}
            placeholder="Tell me about your project..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
          />
        </div>
      </div>
      
      <button 
        disabled={status === "sending"}
        type="submit"
        className="w-full bg-slate-900 text-white rounded-xl py-3 text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-800 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
      >
        {status === "sending" ? "Processing..." : "Send Message"}
        <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </button>
    </form>
  );
};
