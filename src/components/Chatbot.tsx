import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, RefreshCw, Info, Phone, Mail, GraduationCap, Copy, Check } from 'lucide-react';
import { ChatMessage } from '../types';
import { officialContactInfo } from '../data/departmentData';

interface ChatbotProps {
  onOpenApply?: () => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({ onOpenApply }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const initialMessages: ChatMessage[] = [
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Assalam-o-Alaikum! Welcome to the GCWUS Computer Science Department Virtual FAQ Advisor. I can answer questions about admission criteria, BS/MS/PhD programs, faculty specializations, fee structures, and campus laboratories from our departmental knowledge base.',
      timestamp: 'Just now',
      suggestions: [
        'What is eligibility for BS Computer Science?',
        'What degrees are offered?',
        'Fee structure & scholarships',
        'How to apply for Fall 2026 admissions?',
        'Department contact & location',
      ],
    },
  ];

  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Department FAQ knowledge engine with verified rules
  const getDemoResponse = (query: string): { reply: string; suggestions?: string[] } => {
    const q = query.toLowerCase();

    if (q.includes('eligibility') || q.includes('requirement') || q.includes('criteria') || q.includes('marks')) {
      if (q.includes('bs se') || q.includes('software engineering')) {
        return {
          reply: 'Eligibility for BS Software Engineering at GCWUS:\n• Intermediate with Mathematics (FSc Pre-Engineering, ICS with Math/Physics/CS) or equivalent examination with minimum 50% marks.\n• Merit lists are determined based on Matriculation and Intermediate weightages as per GCWUS admission policy.',
          suggestions: ['How to apply online?', 'Fee structure', 'BS CS eligibility'],
        };
      }
      if (q.includes('ms') || q.includes('master')) {
        return {
          reply: 'Eligibility for MS Computer Science:\n• 16 years of education (BS CS / BS SE / BS IT / MSc CS) with at least 2.50/4.00 CGPA (or 60% in annual system).\n• GCWUS Departmental Entry Test or GAT General (NTS) with valid passing score.',
          suggestions: ['MS CS Coursework & Thesis', 'PhD CS Eligibility', 'Faculty advisors'],
        };
      }
      if (q.includes('phd')) {
        return {
          reply: 'Eligibility for PhD Computer Science:\n• MS/MPhil in Computer Science or Software Engineering with minimum CGPA of 3.00/4.00.\n• Subject GRE/GAT Subject pass score, departmental research proposal defense, and formal interview.',
          suggestions: ['Faculty Research Areas', 'Active PhD Labs', 'Contact HoD'],
        };
      }
      return {
        reply: 'Eligibility for BS Computer Science at GCWUS:\n• Higher Secondary School Certificate (FSc Pre-Engineering / ICS / General Science with Mathematics / A-Levels) with at least 50% aggregate marks.\n• Female scholars from all districts of Punjab and nationwide quota are eligible to apply.',
        suggestions: ['What is the fee structure?', 'BS Software Engineering', 'How to apply?'],
      };
    }

    if (q.includes('degree') || q.includes('program') || q.includes('course') || q.includes('it')) {
      return {
        reply: 'GCWUS Department of Computer Science offers official HEC & NCEAC aligned degree programs:\n1. BS Computer Science (4 Years, 140 Credit Hours)\n2. BS Information Technology (4 Years, 138 Credit Hours)\n3. BS Software Engineering (4 Years, 136 Credit Hours)\n4. MS Computer Science (2 Years, 30 Credit Hours)\n5. PhD Computer Science (3-5 Years, 48 Credit Hours)\nPre-medical students are eligible for BS CS & BS IT by clearing 6 credit hours of deficiency Mathematics courses.',
        suggestions: ['BS CS 140 Cr. Hrs', 'Pre-medical eligibility', 'How to apply?'],
      };
    }

    if (q.includes('fee') || q.includes('scholarship') || q.includes('financial') || q.includes('cost')) {
      return {
        reply: 'Tuition fees at GCWUS are heavily subsidized by the Government of the Punjab as a chartered public women university.\n• Regular BS tuition: Approximately PKR 32,000–38,000 per semester.\n• Scholarships Available:\n  - Punjab Educational Endowment Fund (PEEF)\n  - HEC Need-Based Scholarships\n  - Ehsaas Undergraduate Scholarships\n  - Departmental Merit-based fee waivers for top semester scorers.',
        suggestions: ['Eligibility criteria', 'Apply for admissions', 'Office hours'],
      };
    }

    if (q.includes('pre-med') || q.includes('pre medical') || q.includes('medical') || q.includes('deficiency')) {
      return {
        reply: 'Yes! Female pre-medical students are officially eligible to apply for BS Computer Science and BS Information Technology at GCWUS. Admitted pre-medical scholars must pass 6 credit hours of deficiency Mathematics courses within their first year.',
        suggestions: ['BS Computer Science Eligibility', 'BS Information Technology', 'How to apply?'],
      };
    }

    if (q.includes('apply') || q.includes('admission') || q.includes('last date') || q.includes('form')) {
      return {
        reply: 'To apply for Admissions Fall 2026:\n1. Open the GCWUS online admission portal (or click "Apply Now" on this website).\n2. Create an account with your CNIC / B-Form and active email.\n3. Upload verified Matriculation and Intermediate marksheets.\n4. Deposit the admission processing fee via Bank of Punjab (BOP).\n5. Follow the merit list announcements published by the department.',
        suggestions: ['BS Computer Science Eligibility', 'Fee structure', 'Contact admission office'],
      };
    }

    if (q.includes('faculty') || q.includes('teacher') || q.includes('professor') || q.includes('hod') || q.includes('chairperson') || q.includes('usman')) {
      return {
        reply: 'The Department of Computer Science is chaired by Dr. M. Usman Ashraf (Associate Professor & Chairperson, Ph.D. in CS from King Abdulaziz University, former HPC Scientist, HEC Approved PhD Supervisor). The official faculty also includes Dr. Muhammad Hamid (Incharge-IT & Assistant Professor), Dr. Iqra Ilyas (Assistant Professor), Ms. Faiza Nazeer (Convener Program Team), Ms. Farzana Younas, Ms. Ayesha Raana, Ms. Arfa Skandar, Ms. Qurat-ul-ain, Mr. Usama Ashraf, and Mr. Shahid Anwar.',
        suggestions: ['Chairperson profile', 'Faculty directory', 'Official GCWUS page'],
      };
    }

    if (q.includes('lab') || q.includes('facility') || q.includes('infrastructure') || q.includes('gpu')) {
      return {
        reply: 'The department features 6 high-tech computing laboratories with Core i7 workstations, dual-monitor displays, high-throughput GPU clusters for deep learning, campus-wide Wi-Fi, and electronic instrumentation benches.',
        suggestions: ['Photo Gallery', 'Research Projects', 'Explore Programs'],
      };
    }

    if (q.includes('location') || q.includes('address') || q.includes('contact') || q.includes('phone') || q.includes('email') || q.includes('where') || q.includes('campus')) {
      return {
        reply: `Government College Women University Sialkot (GCWUS) Computer Science Department is located at Imam Bibi Campus, Amanabad Road, Sialkot, Punjab, Pakistan.\nPhone: ${officialContactInfo.phonePrimary} / ${officialContactInfo.phoneAdmissions}\nEmail: ${officialContactInfo.email}\nVisiting hours: ${officialContactInfo.officeHours}.`,
        suggestions: ['Directions on map', 'Admissions Helpline', 'Programs Offered'],
      };
    }

    return {
      reply: `Thank you for your inquiry regarding "${query}". For specific inquiries not covered by our FAQ database, please contact our academic office at cs@gcwus.edu.pk or call +92 52 9250137.`,
      suggestions: [
        'What degrees are offered?',
        'What is eligibility for BS CS?',
        'Fee structure & scholarships',
        'How to apply online?',
      ],
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getDemoResponse(text);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: response.reply,
        timestamp: 'Just now',
        suggestions: response.suggestions,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleReset = () => {
    setMessages(initialMessages);
  };

  const handleCopyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className={`fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4.5 py-3.5 rounded-full bg-[#0B3D91] hover:bg-[#072c6e] text-white shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0B3D91] active:scale-95 border border-blue-400/30 ${
          isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'
        }`}
        aria-label="Open student assistant chat"
      >
        <div className="relative">
          <Bot className="w-5 h-5 text-amber-300" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0B3D91]"></span>
        </div>
        <span className="text-xs sm:text-sm font-semibold tracking-wide">CS Student FAQ Advisor</span>
      </button>

      {/* Chat Window Panel */}
      {isOpen && (
        <div 
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[95vw] sm:w-[420px] max-h-[620px] h-[85vh] bg-white rounded-2xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
          role="dialog"
          aria-label="Student Assistant Chat"
        >
          {/* Header */}
          <div className="bg-[#0B3D91] text-white p-4 flex items-center justify-between border-b border-blue-900/40">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-300 border border-white/20 shadow-2xs">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-white flex items-center gap-1.5">
                  <span>GCWUS Student Advisor</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-950 text-amber-300 uppercase tracking-wider border border-blue-800">
                    FAQ Bot
                  </span>
                </h3>
                <p className="text-[11px] text-blue-200 font-medium">Department Knowledge Base</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                type="button"
                className="p-1.5 text-blue-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                title="Reset conversation"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="p-1.5 text-blue-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                title="Close advisor"
                aria-label="Close assistant"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Transparent Notice Strip */}
          <div className="bg-blue-50/90 border-b border-blue-200/70 px-3.5 py-2 flex items-center gap-2 text-[11px] text-slate-700">
            <Info className="w-3.5 h-3.5 text-[#0B3D91] shrink-0" />
            <span className="leading-tight">
              Rule-based departmental knowledge engine. No external LLM backend is connected.
            </span>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F8FAFF]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-8 h-8 rounded-xl bg-blue-100 text-[#0B3D91] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm ${
                  msg.sender === 'user'
                    ? 'bg-[#0B3D91] text-white rounded-br-xs shadow-xs'
                    : 'bg-white text-slate-800 border border-slate-200/90 rounded-bl-xs shadow-2xs'
                }`}>
                  <div className="whitespace-pre-line leading-relaxed font-body">
                    {msg.text}
                  </div>

                  {/* Copy button for bot response */}
                  {msg.sender === 'bot' && (
                    <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                      <span>GCWUS Verified FAQ</span>
                      <button
                        type="button"
                        onClick={() => handleCopyText(msg.id, msg.text)}
                        className="inline-flex items-center gap-1 hover:text-[#0B3D91] transition-colors cursor-pointer"
                        title="Copy answer text"
                      >
                        {copiedId === msg.id ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedId === msg.id ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  )}

                  {/* Suggestion Chips */}
                  {msg.suggestions && (
                    <div className="mt-3.5 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                      {msg.suggestions.map((sug, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => handleSendMessage(sug)}
                          className="text-[11px] px-3 py-1 bg-blue-50 hover:bg-blue-100 text-[#0B3D91] rounded-full font-medium transition-colors cursor-pointer text-left border border-blue-200/60"
                        >
                          {sug}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 items-center text-xs text-slate-500">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-[#0B3D91] flex items-center justify-center shadow-2xs">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white border border-slate-200 p-3 rounded-2xl flex items-center gap-1 shadow-2xs">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Department Action Bar */}
          <div className="px-3 py-2 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-600">
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3 text-[#0B3D91]" />
              <a href={`tel:${officialContactInfo.phonePrimary}`} className="hover:text-[#0B3D91]">{officialContactInfo.phonePrimary}</a>
            </span>
            {onOpenApply && (
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onOpenApply();
                }}
                className="inline-flex items-center gap-1 text-[#0B3D91] font-semibold hover:underline cursor-pointer"
              >
                <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
                <span>Eligibility Guide</span>
              </button>
            )}
          </div>

          {/* Chat Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about admissions, programs, eligibility..."
              className="flex-1 text-xs sm:text-sm px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-[#0B3D91] focus:bg-white transition-colors"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="p-2.5 bg-[#0B3D91] text-white rounded-xl hover:bg-[#072c6e] disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer active:scale-95"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
