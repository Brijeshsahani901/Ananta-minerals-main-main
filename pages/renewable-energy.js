import BlogSidebar from "@/components/elements/BlogSidebar";
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
  LogarithmicScale,
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";
import SolarPV from "@/components/SolarPv";
import { FaDownload } from "react-icons/fa";

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

export default function MineralSecurity() {
  // Copper production by state data
  const copperProductionData = {
    labels: ["Madhya Pradesh", "Rajasthan", "Other States"],
    datasets: [
      {
        label: "Copper Concentrate Production (2021-22)",
        data: [57, 43, 0],
        backgroundColor: [
          "rgba(75, 192, 192, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Copper imports by country
  const copperImportsData = {
    labels: ["Chile", "Indonesia", "Peru", "Australia", "Others"],
    datasets: [
      {
        data: [37, 20, 12, 11, 20],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
        hoverOffset: 4,
      },
    ],
  };

  // Global mineral production vs reserves
  const mineralReservesData = {
    labels: ["Copper", "Rare Earth Elements", "PGMs", "Tellurium"],
    datasets: [
      {
        label: "Global Production 2023 (Tonnes)",
        data: [49000, 350000, 390000, 640],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
      {
        label: "Global Reserves 2023 (Tonnes)",
        data: [1000000, 110000000, 71000000, 36000],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  // PGM imports trend
  const pgmImportsData = {
    labels: ["2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Rhodium Imports (Shipments)",
        data: [1200, 1800, 3100, 4300, 11953],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.1,
      },
      {
        label: "Iridium Imports (Shipments)",
        data: [420, 380, 450, 525, 620],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        tension: 0.1,
      },
    ],
  };

  // Chart options
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Mineral Production vs Reserves (2023)",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label +=
                new Intl.NumberFormat().format(context.parsed.y) + " tonnes";
            }
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        type: "logarithmic",
        title: {
          display: true,
          text: "Tonnes (Log Scale)",
        },
      },
    },
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "India's Copper Imports by Country (2021-22)",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw}%`;
          },
        },
      },
    },
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "India's PGM Imports Trend (2020-2024)",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of Shipments",
        },
      },
    },
  };

  const handleDownload = () => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    console.log(basePath);
    const link = document.createElement("a");

    link.href = `${basePath}/assets/downloads/Renewable_Energy_Applications.pdf`; // ✅ correct URL
    link.download = "Renewable_Energy_Applications.pdf";
    console.log(link);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Layout
        breadcrumbCategory="Energy"
        breadcrumbPostTitle="Critical Minerals for India's Renewable Energy Transition"
      >
        <section
          className="blog-details-area "
          style={{
            backgroundImage: `url("https://brijesh.alpinesoftit.com/site3/static/media/home-shape.684c9f3deb5fb22fbe2f.png")`,
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-1"></div>
              <div className="col-xl-9 col-lg-8">
                <div className="blog-post-wrapper">
                  <div className="latest__post-item">
                    <div className="latest__post-content">
                      <h1 className="title">
                        Critical Minerals for India's Renewable Energy
                        Transition
                      </h1>

                    <div className="post-meta">
                        <p className="date">
                          <b>Date</b> :- July 2025
                        </p>
                        <p className="author">
                          <b>Author(s)</b> :- By Ayan Barman

                        </p>
                        <br />
                        <button
                          onClick={handleDownload}
                          className="btn btn-primary rounded d-inline-flex align-items-center"
                          style={{
                            padding: "0.4rem 0.75rem",
                            fontSize: "0.75rem",
                            textTransform: "none",
                            lineHeight: 1,
                            fontWeight: 500,
                            margintop: "5px",
                          }}
                        >
                          <FaDownload
                            className="me-1"
                            style={{ fontSize: "0.85rem" }}
                          />
                          Download Study
                        </button>
                      </div>

                      <div
                        style={{
                          background: "#f5f5f5",
                          margin: "50px 0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <SolarPV />
                      </div>

                      <div className="content-section">
                        <h3 className="content-title">Overview</h3>
                        <p>
                          The renewable energy sector is increasingly vulnerable
                          to supply, pricing, and processing challenges
                          concerning key transition minerals—copper, platinum
                          group metals (PGMs), and tellurium. These are
                          essential for wind turbines, solar photovoltaic cells,
                          hydrogen electrolysers, and grid-scale electrification
                          systems.
                        </p>
                        <p>
                          Copper supply is under strain due to falling ore
                          grades, high energy costs in top producers like Chile
                          and Peru, and delays in new project permits. PGMs,
                          especially platinum and iridium, are geopolitically
                          risky due to their concentration in South Africa and
                          Russia, directly impacting hydrogen fuel cell
                          scale-up. Tellurium, a low-extraction byproduct of
                          copper refining used in CdTe solar panels, is hampered
                          by limited refining capacity and remains a bottleneck.
                          Without strategic intervention, these constraints may
                          derail India's clean energy targets and slow solar and
                          hydrogen tech deployment.
                        </p>
                      </div>

                      {/* Global Mineral Production vs Reserves Chart */}
                      {/* <div className="chart-container my-5">
                        <h4>Global Mineral Production vs Reserves (2023)</h4>
                        <CustomBarChart 
                          data={mineralReservesData} 
                          options={barOptions}
                        />
                        <p className="chart-source">Source: USGS Commodity Summaries (2024)</p>
                      </div>

                      <div className="content-section">
                        <h3 className="content-title">Domestic Availability and India's Current Value Chain</h3>
                        
                        <h4>Copper</h4>
                        <p>
                          India is not self-sufficient in copper ore production despite having significant smelting capacity. As per IEA data, global copper demand is expected to double by 2040. Hindustan Copper Limited (HCL) remains the sole integrated public-sector company engaged in copper mining, smelting, and refining. Private players like Hindalco and Vedanta operate international mines and rely heavily on imported copper concentrates.
                        </p>
                        <p>
                          According to the Indian Bureau of Mines (IBM), India's total copper ore reserves/resources as of Q1 2020 stood at 1.66 billion tonnes. Of this, only 163.89 million tonnes (9.87%) fall under the 'Reserves' category, while the remaining 1.5 billion tonnes (90.13%) are listed as 'Remaining Resources'. Critically, India lacks any reserves above 1.85% copper grade.
                        </p>

                        <div className="row my-4">
                          <div className="col-md-6">
                            <h4>Copper Production by State (2021-22)</h4>
                            <CustomPieChart 
                              data={copperProductionData} 
                              options={{
                                plugins: {
                                  title: {
                                    display: true,
                                    text: 'Copper Production by State (%)'
                                  }
                                }
                              }}
                            />
                          </div>
                          <div className="col-md-6">
                            <h4>India's Copper Imports by Country</h4>
                            <CustomPieChart 
                              data={copperImportsData} 
                              options={pieOptions}
                            />
                          </div>
                        </div>
                        <p className="chart-source">Source: Indian Bureau of Mines</p>

                        <h4>Platinum Group Metals (PGMs)</h4>
                        <p>
                          India's PGM reserves are limited, with Odisha accounting for 67% of the total, followed by Uttar Pradesh (13%) and Tamil Nadu (8%). Boula-Naushi, 170 km northeast of Bhubaneswar, is the only proven deposit. These reserves are not commercially viable for large-scale extraction and face technological and economic barriers.
                        </p>
                        <p>
                          India imported 11,953 rhodium shipments between March 2023 and February 2024—a 281% increase over the previous year. Iridium, osmium, and ruthenium imports in semi-manufactured forms stood at USD 3,638.25K and 282 kg, primarily sourced from the UK, South Africa, and Japan.
                        </p>

                        <div className="chart-container my-5">
                          <h4>India's PGM Imports Trend (2020-2024)</h4>
                          <CustomLineChart 
                            data={pgmImportsData} 
                            options={lineOptions}
                          />
                          <p className="chart-source">Source: Volza Import Data (2024)</p>
                        </div>

                        <h4>Tellurium</h4>
                        <p>
                          Tellurium is recovered as a byproduct at the Ghatsila Copper Smelter of HCL in Jharkhand, with a licensed capacity of 10,000 kg. No production has been reported since 2004-2005. India imported 330 shipments of tellurium between March 2023 and February 2024, supplied by 80 exporters. Key exporters include Germany, the US, and the UK.
                        </p>

                        <h3 className="content-title">Mineral-Specific Challenges</h3>
                        
                        <h4>Copper</h4>
                        <p>
                          Copper's primary challenges lie in cost, environmental concerns, and geopolitical supply risks. Smelting is a low-margin business, and high labour and energy costs make it difficult for India to compete with China. Moreover, a high concentration of reserves in Chile, Peru, and the DRC creates vulnerabilities. Labour unrest in Chile and security issues in the DRC threaten consistent supply.
                        </p>

                        <h4>Platinum Group Metals (PGMs)</h4>
                        <p>
                          PGMs are vulnerable to supply shocks. Persistent electricity issues in South Africa and geopolitical uncertainties surrounding Russian palladium pose significant threats. The industry faces technical and geographical rigidity: PGM catalyst production is concentrated in specific regions, making capacity transfer challenging.
                        </p>

                        <h4>Tellurium</h4>
                        <p>
                          India's tellurium supply is constrained due to limited natural reserves and high dependence on imports. Supply chain disruptions, especially from China, could seriously impact India's solar manufacturing ambitions. Tellurium's extraction is economically viable only when copper prices are high, as it is typically recovered as a byproduct.
                        </p>

                        <h3 className="content-title">Strategic Recommendations</h3>
                        
                        <h4>Copper</h4>
                        <p><strong>Alternate Chemistries:</strong> Aluminium is a well-established substitute for copper in power cables, automotive radiators, and electrical equipment. India should accelerate research on aluminium-for-copper substitution, especially for EVs and smart grid applications.</p>
                        <p><strong>Focus on Recycling:</strong> India must upgrade its technology and expand capacity to meet future demand. Collaboration with Japan on R&D for next-generation recycling technologies would be valuable.</p>
                        <p><strong>Multilateral Engagement:</strong> India should integrate copper supply chain discussions into BRICS and G20 agendas and establish regional critical mineral hubs.</p>

                        <h4>Platinum Group Metals</h4>
                        <p><strong>Alternate Chemistries:</strong> India's CSIR, BHEL, and IITs should lead domestic R&D on PGM substitutes like rhenium- or nickel-molybdenum-based catalysts. A national-level "PGM Alternatives Innovation Program" could provide dedicated funding.</p>
                        <p><strong>Diversification of Supply:</strong> India can capitalize on mining projects in politically stable regions such as Canada, Australia, and Finland through joint ventures and partnerships.</p>

                        <h4>Tellurium</h4>
                        <p><strong>Alternative Chemistries:</strong> The MNRE and SERIIUS can lead initiatives to pilot alternative solar chemistries, while Indian firms can be incentivized to diversify technology portfolios beyond cadmium telluride.</p>
                        <p><strong>Upgrading Recycling Capabilities:</strong> Developing specialized facilities for recycling tellurium from end-of-life CdTe solar panels and anode slime is essential.</p>

                        <h3 className="content-title">Conclusion</h3>
                        <p>
                          India's clean energy ambitions hinge not just on technology deployment, but on securing resilient, diversified, and future-ready mineral supply chains. Copper, PGMs, and tellurium present distinct vulnerabilities—from import dependence and refining bottlenecks to geopolitical risks and limited domestic production. Strategic investment in recycling, alternative chemistries, and international partnerships—particularly through initiatives like the Critical Minerals Mission and PLI schemes—will be essential to mitigate risks, build self-reliance, and ensure that mineral scarcity does not become a bottleneck to India's energy transition.
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
