import Layout from "@/components/layout/Layout";
import Link from "next/link";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  LogarithmicScale
} from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';

// Register all ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

// Custom chart components to prevent canvas reuse issues
const CustomBarChart = ({ data, options }) => {
  return <Bar data={data} options={options} key={Math.random()} />;
};

const CustomPieChart = ({ data, options }) => {
  return <Pie data={data} options={options} key={Math.random()} />;
};

const CustomLineChart = ({ data, options }) => {
  return <Line data={data} options={options} key={Math.random()} />;
};

export default function DefenceAerospace() {
  // Mineral import dependency data
  const importDependencyData = {
    labels: ['Vanadium', 'Hafnium', 'Zirconium', 'Tantalum', 'Tungsten', 'Niobium', 'Rhenium', 'PGMs', 'REEs'],
    datasets: [{
      label: 'Import Dependency (%)',
      data: [97.5, 100, 92.5, 100, 91.7, 100, 100, 98, 80],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(255, 159, 64, 0.7)',
        'rgba(199, 199, 199, 0.7)',
        'rgba(83, 102, 255, 0.7)',
        'rgba(40, 167, 69, 0.7)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(199, 199, 199, 1)',
        'rgba(83, 102, 255, 1)',
        'rgba(40, 167, 69, 1)'
      ],
      borderWidth: 1
    }]
  };

  // Niobium import sources
  const niobiumSourcesData = {
    labels: ['Brazil (CBMM)', 'Canada', 'Other'],
    datasets: [{
      data: [90, 7, 3],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ],
      hoverOffset: 4
    }]
  };

  // PGM imports trend
  const pgmImportsData = {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Rhodium (Shipments)',
        data: [1200, 1800, 3100, 4300, 11953],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.1
      },
      {
        label: 'Iridium (Shipments)',
        data: [420, 380, 450, 525, 620],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        tension: 0.1
      }
    ]
  };

  // Mineral demand vs domestic production
  const mineralProductionData = {
    labels: ['Vanadium (tonnes)', 'Zirconium (tonnes)', 'Tungsten (tonnes)', 'REEs (tonnes)'],
    datasets: [
      {
        label: 'Domestic Production',
        data: [20, 150, 250, 1200],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'Demand',
        data: [800, 2000, 3000, 6000],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
  };

  // Chart options
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Mineral Demand vs Domestic Production (2024)'
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat().format(context.parsed.y);
            }
            return label;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Tonnes'
        }
      }
    }
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'India\'s Niobium Import Sources (2024)'
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.raw}%`;
          }
        }
      }
    }
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'India\'s PGM Imports Trend (2020-2024)'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Shipments'
        }
      }
    }
  };

  const importDepOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'India\'s Mineral Import Dependency (%)'
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.raw}%`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Percentage'
        }
      }
    }
  };  const handleDownload = () => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    console.log(basePath);
    const link = document.createElement("a");

    link.href = `${basePath}/assets/downloads/Defence_and _Aerospace.docx`; // ✅ correct URL
    link.download = "Defence_and _Aerospace.docx";
    console.log(link);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Layout breadcrumbCategory="Defence" breadcrumbPostTitle="Mineral Security in India's Defence and Aerospace Supply Chain">
        <section className="blog-details-area pt-80 pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-1"></div>
              <div className="col-xl-9 col-lg-8">
                <div className="blog-post-wrapper">
                  <div className="latest__post-item">
                    <div className="latest__post-content">
                      <h1 className="title">Mineral Security in India's Defence and Aerospace Supply Chain</h1>
                      
                      <div className="post-meta">
                        <span className="date">July 2025</span><br/>
                        <span className="author">By Prema Bountra</span><br/>
                        <button
                          onClick={handleDownload}
                          className="download"
                          style={{
                            background: "none",
                            border: "none",
                            color: "blue",
                            cursor: "pointer",
                            padding: 0,
                          }}
                        >
                          Download Study
                        </button>
                      </div>
                        <div className="infographics-placeholder" style={{height: "400px", background: "#f5f5f5", margin: "30px 0", display: "flex", alignItems: "center", justifyContent: "center"}}>
                                                [Infographics Component Will Be Placed Here]
                                            </div>

                      <div className="content-section">
                        <h3 className="content-title">Overview</h3>
                        <p>
                          The defence and aerospace sectors represent the technological apex of India's industrial ambitions, underpinning national security, regional power projection, and strategic autonomy. These sectors are becoming increasingly mineral-intensive, driven by the adoption of hypersonic platforms, miniaturised electronic warfare systems, directed energy weapons, and advanced jet propulsion technologies.
                        </p>
                        <p>
                          India's defence and aerospace minerals landscape is characterized by high import dependency for all high-purity strategic minerals, with complete external reliance for at least five critical minerals. There are no strategic stockpiling mechanisms for elements such as tantalum, rhenium, or niobium, and minimal domestic refining and separation capacity, particularly for REEs, PGMs, and hafnium.
                        </p>
                      </div>

                      {/* Mineral Import Dependency Chart */}
                      {/* <div className="chart-container my-5">
                        <h4>India's Mineral Import Dependency (2024)</h4>
                        <CustomBarChart 
                          data={{
                            labels: importDependencyData.labels,
                            datasets: [{
                              label: 'Import Dependency (%)',
                              data: importDependencyData.datasets[0].data,
                              backgroundColor: importDependencyData.datasets[0].backgroundColor,
                              borderColor: importDependencyData.datasets[0].borderColor,
                              borderWidth: 1
                            }]
                          }} 
                          options={importDepOptions}
                        />
                        <p className="chart-source">Source: Indian Bureau of Mines (2024)</p>
                      </div>

                      <div className="content-section">
                        <h3 className="content-title">Mineral-Specific Challenges</h3>
                        
                        <h4>Vanadium</h4>
                        <p>
                          Vanadium is essential for producing high-strength low-alloy steels used in armour plating and airframe structures. India is heavily reliant on imports, meeting over 97.5% of its 800 tonnes annual demand through imports, primarily from China which dominates 57% of global production.
                        </p>

                        <h4>Hafnium</h4>
                        <p>
                          Used in control rods of naval nuclear reactors and thermal barrier coatings in jet engines, India has no known commercial hafnium production. Annual demand of 250-300 kg is entirely met through imports from France and the US.
                        </p>

                        <h4>Zirconium</h4>
                        <p>
                          Vital for nuclear-powered submarine cladding, India produces only 150 tonnes annually against a demand of 2,000 tonnes. This gap persists despite having one of the world's largest monazite beach sand reserves.
                        </p>

                        <div className="chart-container my-5">
                          <h4>Mineral Demand vs Domestic Production (2024)</h4>
                          <CustomBarChart 
                            data={mineralProductionData} 
                            options={barOptions}
                          />
                          <p className="chart-source">Source: Ministry of Defence (2024)</p>
                        </div>

                        <h4>Tantalum</h4>
                        <p>
                          Critical for microelectronics in seeker heads and radar modules, India's entire 1,000 kg annual demand is imported from Rwanda and DRC, with risks of conflict minerals and political instability.
                        </p>

                        <h4>Tungsten</h4>
                        <p>
                          Indispensable for tank munitions, India produces only 250 tonnes domestically (Rajasthan) against a demand of 3,000 tonnes, with China controlling 83% of global supply.
                        </p>

                        <h4>Niobium</h4>
                        <p>
                          Vital for superalloys in missile airframes, India's 500 tonnes annual demand is entirely imported, with 90% coming from Brazil's CBMM.
                        </p>

                        <div className="chart-container my-5" style={{ width: '500px', height: '500px'}}>
                          <h4>India's Niobium Import Sources (2024)</h4>
                          <CustomPieChart 
                            data={niobiumSourcesData} 
                            options={pieOptions}
                          />
                          <p className="chart-source" style={{ width: '500px', marginBottom: '30px', marginLeft : "1px"}}>Source: The Observer of Economic Complexity</p>
                        </div>

                        <h4 className="mt-2">Rhenium</h4>
                        <p>
                          Used in superalloys for single-crystal turbine blades, India has no indigenous production for its 100 kg annual demand, making it entirely import-reliant.
                        </p>

                        <h4>Platinum Group Metals (PGMs)</h4>
                        <p>
                          Used in hydrogen fuel cells and missile propulsion systems, India imports 98% of its 10-12 tonnes annual demand from South Africa and Russia.
                        </p>

                        <div className="chart-container my-5">
                          <h4>India's PGM Imports Trend (2020-2024)</h4>
                          <CustomLineChart 
                            data={pgmImportsData} 
                            options={lineOptions}
                          />
                          <p className="chart-source">Source: Volza Import Data (2024)</p>
                        </div>

                        <h4>Rare Earth Elements (REEs)</h4>
                        <p>
                          Foundational to high-performance magnets in aircraft actuators and missile guidance systems, India meets only 20% of its demand domestically despite having 6.9 million tonnes of monazite reserves.
                        </p>

                        <h3 className="content-title">Strategic Recommendations</h3>
                        
                        <h4>Vanadium</h4>
                        <p><strong>Alternate Chemistries:</strong> Explore niobium and chromium substitutes in aerospace alloys through DRDO and MIDHANI R&D.</p>
                        <p><strong>Supply Chain:</strong> Pursue joint ventures with South Africa and Brazil under the Mineral Security Partnership.</p>

                        <h4>Tantalum</h4>
                        <p><strong>Alternate Technologies:</strong> Invest in plasma arc melting to recycle tantalum from e-waste, partnering with Finland's Critical Materials Recycling Platform.</p>
                        <p><strong>Supply Chain:</strong> Establish strategic reserve of 100 tonnes tantalum oxide to cover 10-year defence demand.</p>

                        <h4>Tungsten</h4>
                        <p><strong>Alternate Chemistries:</strong> Evaluate depleted uranium alloys for limited armor-piercing applications.</p>
                        <p><strong>Supply Chain:</strong> Partner with Portugal's W Resources and UK's Pryderi Resources to reduce China dependence.</p>

                        <h4>Niobium</h4>
                        <p><strong>Alternate Technologies:</strong> Set up demonstration plant with SAIL and MIDHANI for niobium micro alloyed steels.</p>
                        <p><strong>Supply Chain:</strong> Negotiate G2G offtake agreement with Brazil's CBMM.</p>

                        <h4>PGMs</h4>
                        <p><strong>Alternate Chemistries:</strong> Launch National PGM Substitution Fund to scale nickel-molybdenum catalysts.</p>
                        <p><strong>Supply Chain:</strong> Mandate reverse logistics for PGM recovery from auto-catalysts and aerospace scrap.</p>

                        <h3 className="content-title">Conclusion</h3>
                        <p>
                          India's defence and aerospace sectors face a strategic inflection point where technological ambition is constrained by acute mineral insecurity. A comprehensive mineral security strategy must integrate strategic stockpiling, upstream agreements, domestic processing, targeted recycling, and accelerated R&D on substitution to ensure supply chain resilience and support India's military modernization roadmap.
                        </p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}