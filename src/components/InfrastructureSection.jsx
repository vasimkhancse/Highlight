import React from 'react';
import { 
  Building2, 
  Users2, 
  UserCheck, 
  Code2, 
  HardHat, 
  Layers, 
  Workflow, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Check
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function InfrastructureSection() {
  const stats = [
    {
      icon: Building2,
      label: "Total Facility Area",
      value: "1100",
      unit: "Sq.ft",
      detail: "Clean-layout dedicated machine shop floor in Chinnavedampatti",
      color: "text-amber-400",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20"
    },
    {
      icon: Layers,
      label: "Constructed Area",
      value: "1100",
      unit: "Sq.ft",
      detail: "Optimized for heavy CNC VMC milling and lathe turning operations",
      color: "text-amber-400",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20"
    },
    {
      icon: HardHat,
      label: "Machine Shop Workers",
      value: "04",
      unit: "Persons",
      detail: "Highly qualified, well-trained machine & lathe operators",
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20"
    },
    {
      icon: UserCheck,
      label: "Technical Staffs",
      value: "02",
      unit: "Staffs",
      detail: "Management & Quality assurance supervision",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      icon: Code2,
      label: "CAD/CAM Designer & Programmer",
      value: "01",
      unit: "Person",
      detail: "Dedicated 3D CAD modeling, CAM toolpathing and G-code optimization",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Design & CAD/CAM Simulation",
      desc: "Our in-house programmer generates precise toolpaths and CNC code from customer 2D/3D component drawings.",
      tag: "CAD / CAM Programmer"
    },
    {
      step: "02",
      title: "Precision VMC & Lathe Machining",
      desc: "Machining executed on Vetrimach V650 VMC and heavy DSG/Lodge Shipley Lathes by trained operators.",
      tag: "4 Machine Operators"
    },
    {
      step: "03",
      title: "100% Metrology & Quality Inspection",
      desc: "Rigorous measurement using Mitutoyo, Insize and Baker calibrated gauges on precision granite surface plate.",
      tag: "Technical Staffs"
    },
    {
      step: "04",
      title: "Packaging & On-Time Dispatch",
      desc: "Safe protective packaging and scheduled delivery to customer facility with inspection report.",
      tag: "Zero Delay"
    }
  ];

  return (
    <section id="infrastructure" className="py-20 bg-slate-900/60 relative overflow-hidden border-b border-slate-800">
      
      {/* Background glow */}
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
            <span>Facility & Human Capital</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            Infrastructure & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Manpower Strength</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Our state-of-the-art facility is systematically arranged for optimal material flow, rapid machining setups, and stringent quality checkpoints.
          </p>
        </div>

        {/* 5 Infrastructure Metric Cards (Exact data from Page 5 of PDF) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className={`p-5 rounded-2xl bg-slate-950/80 border ${stat.borderColor} hover:border-amber-500/50 transition-all duration-300 shadow-lg flex flex-col justify-between text-left group`}
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl ${stat.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                    {stat.label}
                  </h3>
                  <div className="mt-2 flex items-baseline space-x-1">
                    <span className="text-3xl font-black text-white font-heading tracking-tight">
                      {stat.value}
                    </span>
                    <span className={`text-sm font-semibold ${stat.color}`}>
                      {stat.unit}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mt-4 pt-3 border-t border-slate-800/80 leading-relaxed">
                  {stat.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Operational Flow Infographic */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800/80 pb-6 mb-8 gap-4">
            <div className="text-left">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">End-To-End Manufacturing</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white uppercase mt-1">
                Integrated Precision Execution Workflow
              </h3>
            </div>
            <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Fully Managed In-House Process</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="relative p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-colors text-left">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black text-amber-500/40 font-mono">{step.step}</span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700">
                    {step.tag}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
