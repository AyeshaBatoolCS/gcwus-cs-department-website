import React, { useState, useEffect } from 'react';
import { X, CheckCircle, AlertTriangle, ExternalLink, Image as ImageIcon, ShieldCheck, Folder, Info, RefreshCw } from 'lucide-react';
import { officialDepartmentInfo } from '../data/departmentInfo';
import { facultyMembers } from '../data/facultyData';

interface AssetStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AssetItem {
  fileName: string;
  purpose: string;
  path: string;
  status: 'checking' | 'found' | 'missing';
  dimensions: string;
}

export const AssetStatusModal: React.FC<AssetStatusModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'assets' | 'verified' | 'missing'>('assets');
  const [assetStatuses, setAssetStatuses] = useState<AssetItem[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const assetList: { fileName: string; purpose: string; path: string; dimensions: string }[] = [
    {
      fileName: 'university-logo.png',
      purpose: 'Official GCWUS University Crest & Emblem',
      path: '/images/university-logo.png',
      dimensions: '512 x 512 px (PNG)'
    },
    {
      fileName: 'campus.jpg',
      purpose: 'GCWUS Imam Bibi Campus, Amanabad Road, Sialkot',
      path: '/images/campus.jpg',
      dimensions: '1920 x 1080 px (JPG)'
    },
    {
      fileName: 'computer-lab.jpg',
      purpose: 'GCWUS CS Central Computing Laboratory',
      path: '/images/computer-lab.jpg',
      dimensions: '1920 x 1080 px (JPG)'
    },
    {
      fileName: 'research-lab.jpg',
      purpose: 'GCWUS AI & Data Science Research Facility',
      path: '/images/research-lab.jpg',
      dimensions: '1920 x 1080 px (JPG)'
    },
    {
      fileName: 'fyp-expo.jpg',
      purpose: 'GCWUS Tech Innovation & FYP Exhibition Facility',
      path: '/images/fyp-expo.jpg',
      dimensions: '1920 x 1080 px (JPG)'
    },
    ...facultyMembers.map((member, idx) => ({
      fileName: `teacher-${idx + 1}.jpg`,
      purpose: `${member.name} (${member.designation})`,
      path: `/images/teacher-${idx + 1}.jpg`,
      dimensions: '600 x 600 px (Portrait)'
    }))
  ];

  const checkAssets = () => {
    setIsRefreshing(true);
    const initial = assetList.map((a) => ({ ...a, status: 'checking' as const }));
    setAssetStatuses(initial);

    initial.forEach((item, index) => {
      const img = new Image();
      img.onload = () => {
        setAssetStatuses((prev) => {
          const next = [...prev];
          if (next[index]) next[index].status = 'found';
          return next;
        });
      };
      img.onerror = () => {
        setAssetStatuses((prev) => {
          const next = [...prev];
          if (next[index]) next[index].status = 'missing';
          return next;
        });
      };
      img.src = `${item.path}?t=${Date.now()}`;
    });

    setTimeout(() => setIsRefreshing(false), 600);
  };

  useEffect(() => {
    if (isOpen) {
      checkAssets();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const foundCount = assetStatuses.filter((a) => a.status === 'found').length;
  const missingCount = assetStatuses.filter((a) => a.status === 'missing').length;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 my-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-xl bg-blue-50 text-[#0B3D91] border border-blue-100">
            <ShieldCheck className="w-6 h-6 text-[#0B3D91]" />
          </div>
          <div>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900">
              GCWUS Verification & Assets Guide
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Official reference compliance, local asset status in <code className="text-[#0B3D91] font-mono font-semibold">/public/images/</code>, and missing items checklist.
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 my-5">
          <button
            onClick={() => setActiveTab('assets')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold transition-all border-b-2 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'assets'
                ? 'border-[#0B3D91] text-[#0B3D91]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Folder className="w-4 h-4" />
            <span>Local Assets ({foundCount}/{assetStatuses.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('verified')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold transition-all border-b-2 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'verified'
                ? 'border-[#0B3D91] text-[#0B3D91]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Verified Information</span>
          </button>
          <button
            onClick={() => setActiveTab('missing')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold transition-all border-b-2 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'missing'
                ? 'border-[#0B3D91] text-[#0B3D91]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Info className="w-4 h-4 text-amber-500" />
            <span>User Action Required</span>
          </button>
        </div>

        {/* Tab 1: Local Assets Probe */}
        {activeTab === 'assets' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs">
              <span className="text-slate-600">
                Asset location: <code className="bg-white px-2 py-0.5 rounded border border-slate-200 font-mono text-[#0B3D91] font-bold">public/images/</code>
              </span>
              <button
                onClick={checkAssets}
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-[#0B3D91] font-semibold cursor-pointer active:scale-95"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-[#0B3D91]' : ''}`} />
                <span>Recheck Files</span>
              </button>
            </div>

            <div className="max-h-72 overflow-y-auto space-y-2 pr-1">
              {assetStatuses.map((asset) => (
                <div
                  key={asset.fileName}
                  className="flex items-center justify-between p-3 rounded-xl border bg-white text-xs gap-3 hover:border-blue-200 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <ImageIcon className="w-4 h-4 text-slate-400 shrink-0" />
                    <div>
                      <div className="font-mono font-bold text-slate-900">{asset.fileName}</div>
                      <div className="text-[11px] text-slate-500">{asset.purpose}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-[10px] text-slate-400 font-mono hidden sm:inline-block">
                      {asset.dimensions}
                    </span>
                    {asset.status === 'found' ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[11px] border border-emerald-200">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Loaded</span>
                      </span>
                    ) : asset.status === 'missing' ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 font-bold text-[11px] border border-amber-200" title="Fallback is active until you drop this file into public/images/">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                        <span>Fallback Active</span>
                      </span>
                    ) : (
                      <span className="text-slate-400 text-[11px]">Probing...</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-xl text-xs text-blue-900 leading-relaxed">
              <strong>Seamless Fallback Guarantee:</strong> When an image is missing from <code>public/images/</code>, the website displays an elegant institutional monogram or high-resolution vector emblem with zero layout shifts or broken icon placeholders.
            </div>
          </div>
        )}

        {/* Tab 2: Verified Information from Official Sources */}
        {activeTab === 'verified' && (
          <div className="space-y-4 max-h-80 overflow-y-auto pr-1 text-xs">
            <div className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-xl text-emerald-900">
              <div className="font-bold mb-1 flex items-center gap-1.5 text-emerald-800">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Verified Official Sources Used:</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-emerald-800">
                <li>
                  <strong>Faculty Directory:</strong>{' '}
                  <a
                    href="https://gcwus.edu.pk/faculties/faculty-of-natural-science/computer-science/faculty-members/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-emerald-950 inline-flex items-center gap-1"
                  >
                    gcwus.edu.pk faculty page <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <strong>Department Overview:</strong>{' '}
                  <a
                    href="https://gcwus.edu.pk/faculties/faculty-of-natural-science/computer-science/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-emerald-950 inline-flex items-center gap-1"
                  >
                    gcwus.edu.pk CS department page <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl border border-slate-200 bg-slate-50">
                <span className="font-bold text-slate-900 block mb-1">Chairperson & Leadership</span>
                <p className="text-slate-600 leading-relaxed">
                  <strong>Dr. M. Usman Ashraf</strong>, Associate Professor & Chairperson. Ph.D. in CS (King Abdulaziz University), Master's in CS (Univ of Lahore). Former HPC Scientist at King Abdulaziz University HPC Centre. HEC Approved PhD Supervisor.
                </p>
              </div>

              <div className="p-3 rounded-xl border border-slate-200 bg-slate-50">
                <span className="font-bold text-slate-900 block mb-1">Establishment & Heritage</span>
                <p className="text-slate-600 leading-relaxed">
                  Department established in <strong>2013</strong> under the Faculty of Natural Sciences. College founded in 1951 (inaugurated by Mohtarma Fatima Jinnah); university charter granted in 2012. Motto: <em>"Service, Knowledge, Discipline"</em>.
                </p>
              </div>

              <div className="p-3 rounded-xl border border-slate-200 bg-slate-50">
                <span className="font-bold text-slate-900 block mb-1">Degree Programs & Credit Hours</span>
                <p className="text-slate-600 leading-relaxed">
                  <strong>BS Computer Science (140 Credit Hours)</strong> and <strong>BS Information Technology (138 Credit Hours)</strong>. Also offering BS Software Engineering, MS CS (30 Cr. Hrs), and PhD CS (48 Cr. Hrs).
                </p>
              </div>

              <div className="p-3 rounded-xl border border-slate-200 bg-slate-50">
                <span className="font-bold text-slate-900 block mb-1">Admission Criteria & Policy</span>
                <p className="text-slate-600 leading-relaxed">
                  Min 50% marks in Intermediate (HSSC) with Mathematics (200 marks). <strong>Pre-Medical students are officially eligible</strong> by passing 6 credit hours of deficiency Mathematics courses within one year.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Missing Items Checklist */}
        {activeTab === 'missing' && (
          <div className="space-y-4 text-xs max-h-80 overflow-y-auto pr-1">
            <div className="p-3.5 bg-amber-50/80 border border-amber-200 rounded-xl text-amber-900">
              <div className="font-bold mb-1 flex items-center gap-1.5 text-amber-800">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Information & Assets You Still Need To Provide:</span>
              </div>
              <p className="text-amber-800/90 leading-relaxed">
                To replace the automatic graceful fallbacks with your authentic institutional assets, please supply the following:
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="p-3 rounded-xl border border-slate-200 bg-white">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-slate-900">1. Official University Logo Image</span>
                  <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-mono">public/images/university-logo.png</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Save the transparent PNG version of the official GC Women University Sialkot logo in <code>public/images/university-logo.png</code>. Currently, a high-fidelity vector insignia badge is displayed.
                </p>
              </div>

              <div className="p-3 rounded-xl border border-slate-200 bg-white">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-slate-900">2. Real Campus & Laboratory Photographs</span>
                  <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-mono">campus.jpg & computer-lab.jpg</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Save real photographs of the GCWUS main building at Katchehry Road to <code>public/images/campus.jpg</code> and your actual student computing labs to <code>public/images/computer-lab.jpg</code>.
                </p>
              </div>

              <div className="p-3 rounded-xl border border-slate-200 bg-white">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-slate-900">3. Faculty Member Portrait Photographs</span>
                  <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-mono">teacher-1.jpg to teacher-10.jpg</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Drop official passport-size portrait photos for Dr. M. Usman Ashraf (teacher-1.jpg), Dr. Muhammad Hamid (teacher-2.jpg), Dr. Iqra Ilyas (teacher-3.jpg), etc. In the meantime, professional academic monograms with verified badges are displayed.
                </p>
              </div>

              <div className="p-3 rounded-xl border border-slate-200 bg-white">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-slate-900">4. Direct Departmental Intercom Extensions</span>
                  <span className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Administrative Record</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  The website currently uses the official primary university exchange (<code>+92 52 9250137</code>) and admissions contact (<code>+92 52 9250170</code>). Specific faculty extension lines can be added when published by the administration.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-slate-500">
            Source reference:{' '}
            <a
              href="https://gcwus.edu.pk"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#0B3D91] hover:underline"
            >
              gcwus.edu.pk
            </a>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="px-5 py-2.5 rounded-xl bg-[#0B3D91] hover:bg-[#082e70] text-white font-semibold transition-colors cursor-pointer active:scale-95"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
