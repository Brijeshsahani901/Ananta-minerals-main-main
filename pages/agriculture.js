import BlogSidebar from "@/components/elements/BlogSidebar";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
// import { BarChart, PieChart, LineChart } from "@/components/charts"; // Assuming you have these chart components
import { Bar,Line,Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.raw} million tonnes`;
          }
        }
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Million Tonnes'
        }
      },
    },
  };

  return <Bar options={options} data={data} />;
};

const PieChart = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.raw}%`;
          }
        }
      },
    },
  };

  return <Pie options={options} data={data} />;
};

const LineChart = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: $${context.raw}`;
          }
        }
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Price ($/tonne)'
        }
      },
    },
  };

  return <Line options={options} data={data} />;
};


export default function Agriculture() {
  // Data for charts (you can move this to separate files)
  const fertilizerDemandData = {
    labels: ['Phosphorus', 'Potash', 'Sulphur', 'Zinc', 'Boron', 'Selenium'],
    datasets: [
      {
        label: 'Domestic Production',
        data: [3.2, 0, 1.2, 2.3, 0, 0.02],
        backgroundColor: '#4CAF50',
      },
      {
        label: 'Imports',
        data: [9.8, 4.4, 4.0, 0.5, 0.0066, 0.22],
        backgroundColor: '#FF9800',
      },
    ],
  };

  const potashSourcesData = {
    labels: ['Canada', 'Belarus', 'Israel', 'Jordan', 'Others'],
    datasets: [
      {
        data: [40, 20, 15, 15, 10],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
        ],
      },
    ],
  };

  const priceTrendsData = {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Phosphorus Price ($/tonne)',
        data: [120, 135, 210, 195, 180],
        borderColor: '#4CAF50',
        fill: false,
      },
      {
        label: 'Potash Price ($/tonne)',
        data: [220, 240, 420, 380, 350],
        borderColor: '#FF9800',
        fill: false,
      },
    ],
  };

   const handleDownload = () => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    console.log(basePath);
    const link = document.createElement("a");

    link.href = `${basePath}/assets/downloads/Agriculture.docx`; // ✅ correct URL
    link.download = "Agriculture.docx";
    console.log(link);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Layout breadcrumbCategory="Agriculture" breadcrumbPostTitle="Mineral Security in India's Agriculture Sector">
        <section className="blog-details-area pt-80 pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-1">
             
              </div>
              <div className="col-xl-9 col-lg-8">
                <div className="blog-post-wrapper">
                  <div className="latest__post-item">
                    <div className="latest__post-content">
                      <h1 className="title">Mineral Security in India's Agriculture Sector</h1>

                        <div className="post-meta">
                        <span className="date"><b>Date</b> :- July 2025</span> <br/>
                        <span className="author"><b>Author</b> :- By Prema Bountra</span><br/>
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
                                                [Infographics Component Will Be Placed Here later]
                                            </div>
                      
                      <div className="content-section">
                        <h3 className="content-title">Overview</h3>
                        <p>
                          India's agricultural sector—on which over 60% of the population depends directly or indirectly—relies heavily on the uninterrupted supply of mineral-based fertilizers. This dependency exposes a critical vulnerability: in 2023 alone, India imported over 18 million tonnes of key fertilizer minerals, with import reliance ranging from 50% to 100% across major inputs. The implications are twofold—a significant economic strain, reflected in the fertilizer subsidy bill reaching ₹2.25 lakh crore in FY2023-24, and a growing food security risk if global supply chains are disrupted.
                        </p>
                        <p>
                          India's mineral security in agriculture is thus not merely a question of cost or logistics—it is deeply tied to agronomic productivity, ecological resilience, and the safeguarding of national food sovereignty. This security hinges on the consistent availability of mineral fertilizers and micronutrients that correct soil deficiencies, improve crop health, and enhance yields. However, for each of these minerals, India faces a distinct set of challenges spanning resource scarcity, technological gaps, import dependencies, and policy weaknesses.
                        </p>
                      </div>

                      {/* Fertilizer Demand vs Domestic Availability Chart */}
                      {/* <div className="chart-container my-5">
                        <h4>Fertilizer Demand vs Domestic Resource Availability 2024 (in million tonnes)</h4>
                        <p className="chart-source">Source: Fertilizer India</p>
                      </div>

                      <div className="content-section">
                        <h3 className="content-title">India's Current Global Value Chains</h3>
                        
                        <h4>Phosphorus (as Rock Phosphate and Phosphoric Acid)</h4>
                        <p>
                          India is one of the world's largest consumers of phosphate fertilizers but is heavily dependent on imports due to the limited quality and quantity of domestic rock phosphate reserves. In 2022-23, India imported approximately 9.8 million metric tonnes of rock phosphate and 2.8 million tonnes of phosphoric acid, mainly from Morocco, Jordan, Egypt, and Israel. Domestic production, centered around states like Rajasthan, Madhya Pradesh, and Uttar Pradesh, contributed only around 1.4 million tonnes of low-grade rock phosphate, insufficient to meet the requirements of the 12.4 million tonnes demanded annually by the fertilizer sector.
                        </p>
                        <p>
                          Morocco has emerged as the single most important supplier due to its control over nearly 70 percent of global reserves. In a strategic move to mitigate long-term risk, India signed an MoU with Morocco's OCP Group in January 2023 to jointly develop a fertilizer plant in India and secure 1.2 million tonnes of annual phosphoric acid supply under a long-term contract. However, access to Moroccan phosphate is influenced by global market volatility and price manipulation risks, given the country's quasi-monopoly.
                        </p>

                        <div className="row my-4">
                          <div className="col-md-6">
                            <img src="/assets/img/agriculture/phosphorus-map.png" alt="Phosphorus sources" className="img-fluid" />
                          </div>
                          <div className="col-md-6">
                            <img src="/assets/img/agriculture/phosphorus-process.png" alt="Phosphorus processing" className="img-fluid" />
                          </div>
                        </div>

                        <h4>Potash (Potassium Chloride)</h4>
                        <p>
                          Potash is another mineral where India is almost entirely import dependent. Annual domestic demand exceeds 4.5 million tonnes, with over 95 percent met through imports from Canada, Belarus, Israel, and Jordan. India signed a long-term supply contract with Canpotex, the Canadian potash consortium, in April 2023 to secure 1.5 million tonnes annually at a benchmark price of USD 422 per tonne. However, this relationship is increasingly fraught due to Canada's pivot towards critical mineral alliances with the U.S. and EU, raising concerns about future prioritization.
                        </p>

                        <div className="chart-container my-5">
                          <h4>India's Potash Import Sources (2023)</h4>
                          <div className="row">
                            <div className="col-md-6">
                            </div>
                            <div className="col-md-6">
                              <img src="/assets/img/agriculture/potash-image.png" alt="Potash production" className="img-fluid" />
                            </div>
                          </div>
                          <p className="chart-source">Source: Fertiliser Association of India</p>
                        </div>

                        <h4>Selenium</h4>
                        <p>
                          Selenium is not produced as a primary mineral but is recovered as a byproduct from copper refining. India has minimal domestic production capacity; trace quantities of selenium are extracted from anode slimes in copper smelters operated by Hindustan Copper Ltd (HCL) and Hindalco. However, this is inadequate, with India importing roughly 220 tonnes annually, primarily from Japan, South Korea, and Germany.
                        </p>

                        <div className="chart-container my-5">
                          <h4>Mineral Price Trends (2020-2024)</h4>
                          <p className="chart-source">Source: World Bank Commodity Prices</p>
                        </div>

                        <h3 className="content-title">Other Critical Minerals</h3>
                        
                        <h4>Sulphur</h4>
                        <p>
                          India imported over 4 million tonnes of elemental sulphur in 2023, used for sulphuric acid in phosphate fertilizer production. Imports originate mainly from Saudi Arabia and the UAE, which supply over 60 percent of India's requirements. These are stable relationships underpinned by strong energy sector ties, but no mineral-specific MoUs exist, leaving supply vulnerable to shipping and energy market disruptions.
                        </p>

                        <h4>Zinc</h4>
                        <p>
                          Domestic production of zinc is led by Hindustan Zinc Ltd, which meets over 80 percent of the country's needs. However, fertilizer-grade zinc, required in micro-nutrient form, is still partly imported, especially from South Korea and China. India has yet to establish preferential value-chain partnerships for micronutrient-grade zinc.
                        </p>

                        <h4>Boron</h4>
                        <p>
                          India lacks boron reserves. In 2023, over 80 percent of boron imports came from Turkey and the United States. While Turkey's Eti Maden is a major global supplier, India does not have a dedicated G2G agreement, unlike China, which has a long-term boric acid supply contract. This creates an asymmetry in access.
                        </p>

                        <h3 className="content-title">Mineral-Specific Challenges for India's Agricultural Sector</h3>
                        
                        <h4>Phosphorus</h4>
                        <p>
                          India's phosphorus deficit is rooted in its limited endowment of high-grade rock phosphate. In 2023-24, India consumed approximately 8 million tonnes of phosphorus (as P₂O₅) for agricultural purposes, yet domestic rock phosphate production stood at only 3.2 million tonnes, much of it sub-grade with P₂O₅ content less than 17%.
                        </p>

                        <h4>Potash</h4>
                        <p>
                          India imports 100% of its potash requirements due to the absence of economically viable potash reserves. In 2023, India imported 4.4 million tonnes of Muriate of Potash (MOP), with Canada (Nutrien), Russia (Uralkali), and Belarus (Belaruskali) being the top suppliers.
                        </p>

                        <h3 className="content-title">Mineral-Wise Recommendations</h3>
                        
                        <h4>Phosphorus</h4>
                        <p><strong>Alternate Chemistries:</strong> Phosphorus solubilizing bacteria (PSB), such as Bacillus megaterium and Pseudomonas fluorescens, have demonstrated the ability to enhance phosphorus availability from fixed soil pools.</p>
                        <p><strong>Technological Alternatives:</strong> Advanced beneficiation technologies such as flotation and calcination should be deployed at existing rock phosphate mines in Madhya Pradesh and Rajasthan.</p>
                        <p><strong>Strengthening Supply Chains:</strong> India must intensify bilateral partnerships with phosphorus-rich countries.</p>

                        <h4>Potash</h4>
                        <p><strong>Alternate Chemistries:</strong> Potassium-mobilizing biofertilizers (KMBs), particularly strains of Frateuria aurantia, have shown potential in maize and sugarcane cultivation.</p>
                        <p><strong>Technological Alternatives:</strong> Extraction of potash from seawater brine and lake residues using solar evaporation should be explored.</p>

                        <h3 className="content-title">Towards Strategic Value Chain Diplomacy</h3>
                        <p>
                          India's agricultural mineral value chains remain highly import-dependent and exposed to geopolitical volatility. While MoUs with Morocco and Canada have helped partially secure phosphorus and potash, long-term bilateral frameworks remain underdeveloped for selenium, boron, and sulphur. A regional critical mineral security initiative, similar to the U.S.-led Minerals Security Partnership, should be considered. India could also align its fertilizer diplomacy with climate-resilient agriculture initiatives under G20 and Global Biofuel Alliance platforms. The current absence of a dedicated Fertilizer Mineral Security Mission hampers India's ability to engage at scale and urgency with suppliers. A national strategy must now embed mineral-specific G2G frameworks into foreign policy, especially with Morocco, Israel, Canada, and Japan. This would support the dual objectives of food security and strategic autonomy in agriculture.
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