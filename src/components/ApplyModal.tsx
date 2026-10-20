import React, { useState } from 'react';
import { Program } from '../types';
import { X, CheckCircle, Calculator, FileText, ArrowRight, HelpCircle, GraduationCap, Sparkles, AlertCircle } from 'lucide-react';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProgram?: Program | null;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose, selectedProgram }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'eligibility-checker' | 'checklist'>('overview');
  const [chosenProgramId, setChosenProgramId] = useState<string>(selectedProgram ? selectedProgram.id : 'bs-cs');

  // Eligibility Calculator State
  const [degreeBackground, setDegreeBackground] = useState('ics');
  const [userPercentage, setUserPercentage] = useState<number>(65);
  const [mathCompleted, setMathCompleted] = useState(true);

  if (!isOpen) return null;

  const isPreMed = degreeBackground === 'fsc-pre-med';

  const checkEligibilityStatus = () => {
    if (chosenProgramId === 'bs-cs' || chosenProgramId === 'bs-it' || chosenProgramId === 'bs-se') {
      if (userPercentage < 50) {
        return {
          eligible: false,
          reason: `Minimum required aggregate is 50% in Intermediate for BS computing programs at GCWUS. Your entered score is ${userPercentage}%.`,
        };
      }

      if (isPreMed) {
        return {
          eligible: true,
          isPreMedPathway: true,
          reason: `Congratulations! As per official GCWUS admission criteria, Pre-Medical students with minimum 50% marks are eligible for BS Computer Science and BS Information Technology. Admitted scholars complete 6 credit hours of deficiency Mathematics courses within their first academic year.`,
        };
      }

      if (!mathCompleted) {
        return {
          eligible: false,
          reason: 'Mathematics (200 marks) is required at Intermediate level, or applicants must apply under the verified Pre-Medical deficiency pathway.',
        };
      }

      return {
        eligible: true,
        reason: `Congratulations! With ${userPercentage}% and Mathematics qualification, you meet the official eligibility criteria for undergraduate computing degrees at GCWUS.`,
      };
    }

    if (chosenProgramId === 'ms-cs') {
      if (userPercentage < 60) {
        return {
          eligible: false,
          reason: 'Minimum 2.50/4.00 CGPA (or 60% in annual system) in BS CS / BS SE / IT is required for MS Computer Science admissions.',
        };
      }
      return {
        eligible: true,
        reason: 'Eligible for MS Computer Science subject to clearing the GCWUS Departmental Entry Test or GAT General.',
      };
    }

    if (chosenProgramId === 'phd-cs') {
      if (userPercentage < 70) {
        return {
          eligible: false,
          reason: 'Minimum 3.00/4.00 CGPA in MS/MPhil Computer Science along with GAT Subject pass is required for PhD admissions.',
        };
      }
      return {
        eligible: true,
        reason: 'Eligible for PhD Computer Science review, subject to departmental research synopsis evaluation under HEC Approved PhD faculty.',
      };
    }

    return { eligible: true, reason: 'Eligible to apply.' };
  };

  const status = checkEligibilityStatus();

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-slate-950/65 backdrop-blur-xs overflow-y-auto"      role="dialog"
      aria-modal="true"
    >
      <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[calc(100vh-2rem)] overflow-y-auto p-6 sm:p-9 shadow-2xl border border-slate-200 my-0 sm:my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Close application guide"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B3D91] mb-1.5">
            <GraduationCap className="w-4 h-4 text-amber-500" />
            <span>GCWUS Admissions Session Fall 2026</span>
          </div>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 leading-snug">
            Apply to Computer Science Department
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 font-body">
            Official admission guide, interactive eligibility assessment (including pre-medical deficiency pathway), and required document checklist.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl mb-6 border border-slate-200/60">
          <button
            onClick={() => setActiveTab('overview')}
            type="button"
            className={`flex-1 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
              activeTab === 'overview' ? 'bg-white text-[#0B3D91] shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            How to Apply
          </button>
          <button
            onClick={() => setActiveTab('eligibility-checker')}
            type="button"
            className={`flex-1 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'eligibility-checker' ? 'bg-white text-[#0B3D91] shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>Eligibility Checker</span>
          </button>
          <button
            onClick={() => setActiveTab('checklist')}
            type="button"
            className={`flex-1 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'checklist' ? 'bg-white text-[#0B3D91] shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Documents</span>
          </button>
        </div>

        {/* Tab 1: How to Apply Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-4">
            <div className="space-y-3">
              {[
                {
                  step: '01',
                  title: 'Online Application Registration',
                  desc: 'Visit the GCWUS online admissions portal (gcwus.edu.pk) and create an applicant account using your CNIC / B-Form and email.',
                },
                {
                  step: '02',
                  title: 'Select Program & Upload Records',
                  desc: 'Choose BS Computer Science (140 Cr. Hrs), BS IT (138 Cr. Hrs), BS SE, MS CS, or PhD CS. Upload verified academic marksheets.',
                },
                {
                  step: '03',
                  title: 'Fee Challan Payment via Bank of Punjab',
                  desc: 'Print the computerized admission challan and deposit processing fee at any branch of Bank of Punjab (BOP).',
                },
                {
                  step: '04',
                  title: 'Departmental Merit List Release',
                  desc: 'Merit lists will be published on the university website and department notice boards. Selected scholars submit original documents.',
                },
              ].map((s) => (
                <div key={s.step} className="flex gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="font-heading font-extrabold text-sm text-[#0B3D91] shrink-0 w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center shadow-2xs">
                    {s.step}
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">{s.title}</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200/70 text-xs text-blue-900 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#0B3D91] shrink-0" />
                <span>Admissions Helpline: <strong>+92 52 9250170</strong></span>
              </span>
              <span className="font-bold text-[#0B3D91]">admissions@gcwus.edu.pk</span>
            </div>
          </div>
        )}

        {/* Tab 2: Interactive Eligibility Checker */}
        {activeTab === 'eligibility-checker' && (
          <div className="space-y-4.5">
            <div className="bg-[#F8FAFF] p-4 sm:p-5 rounded-xl border border-slate-200 space-y-3.5">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Target Degree Program</label>
                <select
                  value={chosenProgramId}
                  onChange={(e) => setChosenProgramId(e.target.value)}
                  className="w-full text-xs sm:text-sm p-2.5 bg-white border border-slate-200 rounded-xl focus:outline-hidden"
                >
                  <option value="bs-cs">BS Computer Science (140 Credit Hours)</option>
                  <option value="bs-it">BS Information Technology (138 Credit Hours)</option>
                  <option value="bs-se">BS Software Engineering (136 Credit Hours)</option>
                  <option value="ms-cs">MS Computer Science (30 Credit Hours)</option>
                  <option value="phd-cs">PhD Computer Science (48 Credit Hours)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Educational Background
                </label>
                <select
                  value={degreeBackground}
                  onChange={(e) => setDegreeBackground(e.target.value)}
                  className="w-full text-xs sm:text-sm p-2.5 bg-white border border-slate-200 rounded-xl focus:outline-hidden"
                >
                  <option value="ics">ICS (Math, Physics / Computer Science / Statistics)</option>
                  <option value="fsc-pre-eng">FSc Pre-Engineering (Math, Physics, Chemistry)</option>
                  <option value="fsc-pre-med">FSc Pre-Medical (Eligible with Mathematics deficiency courses)</option>
                  <option value="a-levels">A-Levels / Cambridge Equivalent</option>
                  <option value="general-science">General Science with Mathematics</option>
                  <option value="bs-degree">16-Year BS CS / SE Degree (for Graduate admission)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Your Percentage / Equivalent (%)
                  </label>
                  <input
                    type="number"
                    min="30"
                    max="100"
                    value={userPercentage}
                    onChange={(e) => setUserPercentage(Number(e.target.value))}
                    className="w-full text-xs sm:text-sm p-2.5 bg-white border border-slate-200 rounded-xl focus:outline-hidden"
                  />
                </div>
                <div className="flex items-center pt-5">
                  <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={mathCompleted || isPreMed}
                      onChange={(e) => setMathCompleted(e.target.checked)}
                      disabled={isPreMed}
                      className="rounded text-[#0B3D91] focus:ring-[#0B3D91]"
                    />
                    <span>{isPreMed ? 'Deficiency Math Pathway' : 'Studied Mathematics (200 Marks)'}</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Assessment Feedback Result */}
            <div
              className={`p-4 rounded-xl border text-xs leading-relaxed ${
                status.eligible
                  ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
                  : 'bg-rose-50/80 border-rose-200 text-rose-900'
              }`}
            >
              <div className="flex items-start gap-2.5">
                {status.eligible ? (
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="font-bold mb-0.5">
                    {status.eligible ? 'Academic Eligibility Status: Verified Eligible' : 'Eligibility Status: Does Not Meet Minimum Standard'}
                  </div>
                  <p>{status.reason}</p>
                  {status.isPreMedPathway && (
                    <div className="mt-2 pt-2 border-t border-emerald-200 flex items-center gap-1.5 font-semibold text-emerald-800">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>Deficiency Math courses: 6 Credit Hours to be cleared within one year.</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Required Documents Checklist */}
        {activeTab === 'checklist' && (
          <div className="space-y-3.5 text-xs">
            <p className="text-slate-600">
              Prepare scanned copies of these verified documents before beginning your GCWUS online admission submission:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                'Matriculation (SSC) Result Card / Certificate',
                'Intermediate (HSSC) Part-I / Part-II Marksheet',
                'Candidate CNIC or NADRA B-Form copy',
                'Father / Guardian CNIC copy',
                'Domicile Certificate (Punjab / Respective Quota)',
                '4 Passport-size photographs (blue background)',
                'Equivalence Certificate (for O/A-Level applicants from IBCC)',
                'NTS GAT General / Subject Card (for MS/PhD applicants)',
              ].map((doc, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-200/60 text-slate-700">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={onClose}
            type="button"
            className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold transition-colors cursor-pointer active:scale-95"
          >
            Close Guide
          </button>

          <a
            href="https://gcwus.edu.pk"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0B3D91] hover:bg-[#072c6e] text-white text-xs sm:text-sm font-semibold shadow-sm transition-colors cursor-pointer active:scale-95"
          >
            <span>Proceed to GCWUS Portal</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </a>
        </div>
      </div>
    </div>
  );
};
