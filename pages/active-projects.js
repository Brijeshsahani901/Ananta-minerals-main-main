// pages/project-tracker.js
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import projectData from "@/util/projectData";

export default function ProjectTracker() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const [activeTab, setActiveTab] = useState("procurement");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const tabs = [
    { id: "procurement", label: "Procurement", count: projectData.procurement.length },
    { id: "g2", label: "G2 - General Exploration", count: projectData.g2.length },
    { id: "g3", label: "G3 - Preliminary Exploration", count: projectData.g3.length },
    { id: "g4", label: "G4 - Reconnaissance Survey", count: projectData.g4.length },
  ];

  const getData = () => {
    switch (activeTab) {
      case "g2": return projectData.g2;
      case "g3": return projectData.g3;
      case "g4": return projectData.g4;
      case "procurement": return projectData.procurement;
      default: return [];
    }
  };

  const getStageDescription = () => {
    switch (activeTab) {
      case "g2":
        return {
          title: "G2 – General Exploration",
          description: "G2: The Project stage includes detailed work conducted over very small areas (less than a sq. km to a few sq. kms) to establish the geological characteristics of the deposit. Activities at this stage include detailed mapping (1:5,000 or 1:4,000), systematic drilling at specific intervals, and detailed petrological/mineralogical studies. The goal is to provide a moderate level of confidence in the estimation of quantities. "
        };
      case "g3":
        return {
          title: "G3 – Preliminary Exploration",
          description: "A more focused stage conducted over smaller areas (kms to tens of sq. kms) to establish the existence of an ore body. Enhanced focus on closer-spaced geological mapping (1:25,000 or 1:10,000), pitting/trenching to expose the ore body, and scout drilling. The target is to establish the continuity of the ore body and provide a low level of confidence in the estimation of quantities."
        };
      case "g4":
        return {
          title: "G4 – Reconnaissance Survey",
          description: "G4: Project level indicates the initial, broad-scale exploration stage aimed at identifying potential areas for further study and eliminating less promising areas. The salient features include regional geological mapping (1:50,000 or 1:25,000 scale), wide-spaced airborne/ground geophysical surveys, and regional geochemical sampling. The target is to establish the presence of mineral resources based on indirect evidence, such as aerial surveys or surface grab sampling."
        };
      case "procurement":
        return {
          title: "Procurement",
          description: "Procurement and R&D: These projects include procurement projects for machinery, lab equipment and essential technology for critical minerals generation. Additionally, this includes projects from the S & T Prism Scheme and Regional Mineral Targetting efforts towards enhancing R&D capabilities. "
        };
      default:
        return null;
    }
  };

  const description = getStageDescription();

  const filteredData = getData().filter(item => {
    const matchesSearch =
      searchTerm === "" ||
      item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.state?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.mineral?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.agency?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || item.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const formatCurrency = (value) => {
    if (!value) return "—";
    return new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 0,
    }).format(value);
  };

  const totalProjects =
    projectData.g2.length +
    projectData.g3.length +
    projectData.g4.length +
    projectData.procurement.length;

  const totalInProgress = getData().filter(item => item.status === "In Progress").length;
  const totalApproved = getData().filter(item => item.status === "Approved").length;

  return (
    <Layout breadcrumbCategory="Minerals" breadcrumbPostTitle="Project Tracker CRM">
      <section
        style={{
          background: "linear-gradient(135deg,#f5f7fa,#eef2f7)",
          padding: "20px 0",
        }}
      >
        <div className="container">
          <div className="card-wrapper p-4">

            {/* HEADER */}
            <div className="row mb-2 align-items-center">
              <div className="col-md-8">
                <h4 >
                  Mineral Exploration Projects Tracker
                </h4>
                <p>
                  Tracking {totalProjects} projects across India
                </p>
              </div>

              <div className="col-md-4 d-flex justify-content-md-end gap-3 mt-3 mt-md-0">
                <div className="stat-card">
                  <div className="stat-value">{totalInProgress}</div>
                  <div className="stat-label">In Progress</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">{totalApproved}</div>
                  <div className="stat-label">Approved</div>
                </div>
              </div>
            </div>

            {/* TABS */}
            <div className="tabs custom-scrollbar">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
                >
                  {tab.label}
                  <span className="tab-count">{tab.count}</span>
                </button>
              ))}
            </div>


            {/* STAGE DESCRIPTION */}
            {description && (
              <div className="stage-description-card">
                <h5 className="stage-title">{description.title}</h5>
                <p className="stage-text">{description.description}</p>
              </div>
            )}


            {/* FILTER BAR */}
            <div className="row g-3 mb-3 align-items-center">
              <div className="col-md-7">
                <div className="search-wrapper">
                  <span className="search-icon">🔍</span>
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                </div>
              </div>

              <div className="col-md-3">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">All Status</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Approved">Approved</option>
                </select>
              </div>

              <div className="col-md-2">
                <div className="result-badge">
                  {filteredData.length} Results
                </div>
              </div>
            </div>

            {/* TABLE */}
            <div className="table-container custom-scrollbar">
              <table>
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Stage</th>
                    <th>State</th>
                    <th>Agency</th>
                    <th>Mineral</th>
                    <th>Cost (₹)</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.length > 0 ? (
                    filteredData.map((item, idx) => (
                      <tr key={idx}>
                        <td className="project-name">{item.name}</td>
                        <td><span className="stage">{item.stage}</span></td>
                        <td>{item.state}</td>
                        <td>{item.agency || "—"}</td>
                        <td className="mineral">{item.mineral}</td>
                        <td className="cost">₹{formatCurrency(item.cost)}</td>
                       <td>
  <span
    className={`status ${
      item.status?.trim().toLowerCase() === "approved" 
        ? "approved" 
        : item.status?.trim().toLowerCase() === "in progress"
        ? "progress"
        : ""
    }`}
  >
    {item.status}
  </span>
</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="no-data">
                        No projects found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </section>

      <style jsx>{`

      .stage-description-card {
  margin-top: 16px;
  margin-bottom: 20px;
  padding: 16px 20px;
  border-radius: 14px;
  background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
  border-left: 4px solid #2F4156;
  animation: fadeIn .3s ease-in-out;
}

.stage-title {
  font-size: 15px;
  font-weight: 600;
  color: #2F4156;
  margin-bottom: 6px;
}

.stage-text {
  font-size: 13px;
  color: #475569;
  line-height: 1.6;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}


        .card-wrapper {
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.05);
        }

        .main-heading {
          font-size: 22px;
          font-weight: 600;
          color: #2F4156;
          margin-bottom: 4px;
        }

        .sub-heading {
          font-size: 13px;
          color: #6c757d;
        }

        .stat-card {
          background: #f8fafc;
          padding: 10px 18px;
          border-radius: 12px;
          text-align: center;
          min-width: 90px;
          border: 1px solid #e2e8f0;
        }

        .stat-value {
          font-size: 18px;
          font-weight: 700;
          color: #2F4156;
        }

        .stat-label {
          font-size: 11px;
          text-transform: uppercase;
          color: #64748b;
          letter-spacing: .5px;
        }

        .tabs {
          display: flex;
          gap: 8px;
          overflow-x: auto;
        }

        .tab-btn {
          font-size: 13px;
          padding: 8px 16px;
          border-radius: 10px;
          border: 1px solid #2F4156;
          background: white;
          cursor: pointer;
          transition: .3s;
        }

        .tab-btn.active {
          background: #2F4156;
          color: #fff;
        }

        .tab-count {
          font-size: 11px;
          margin-left: 6px;
          background: rgba(0,0,0,0.08);
          padding: 2px 6px;
          border-radius: 20px;
        }

        .search-wrapper {
          position: relative;
        }

        .search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 14px;
        }

        .search-input {
          width: 100%;
          padding: 8px 14px 8px 36px;
          font-size: 12.5px;
          border-radius: 30px;
          border: 1px solid #e2e8f0;
          outline: none;
        }

        .filter-select {
          width: 100%;
          padding: 8px 14px;
          font-size: 12.5px;
          border-radius: 30px;
          border: 1px solid #e2e8f0;
          background: #fff;
          cursor: pointer;
        }

        .result-badge {
          font-size: 12px;
          padding: 8px;
          text-align: center;
          background: #edf2f7;
          border-radius: 30px;
          font-weight: 500;
        }

        .table-container {
          max-height: 500px;
          overflow: auto;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          margin-top: 10px;
        }

        table {
          width: 100%;
          min-width: 1000px;
          border-collapse: collapse;
        }

        thead {
          background: #1a2a38;
          color: white;
          position: sticky;
          top: 0;
        }

        th, td {
          padding: 12px 16px;
          font-size: 13px;
          text-align: left;
        }

        tbody tr {
          border-bottom: 1px solid #edf2f7;
          transition: background .2s;
        }

        tbody tr:hover {
          background: #f3f7fb;
        }

        .project-name {
          font-weight: 600;
        }

        .stage {
          font-size: 11px;
          padding: 4px 8px;
          background: #e7edf5;
          border-radius: 20px;
        }

        .cost {
          font-weight: 600;
        }

  .status {
  font-size: 11px;
  padding: 4px 12px;
  border-radius: 20px;
  font-weight: 600;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}



        .approved {
          background: #e0f2e9;
          color: #0b5e42;
        }

        .progress {
          background: #fff4e0;
          color: #9e5e0b;
        }

        .no-data {
          text-align: center;
          padding: 40px;
          color: #94a3b8;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #94a3b8;
          border-radius: 10px;
        }

      `}</style>
    </Layout>
  );
}