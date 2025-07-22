import BlogSidebar from "@/components/elements/BlogSidebar";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
// import { BarChart, PieChart, LineChart } from "@/components/charts"; // Assuming you have these chart components
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import SupplyChainSteps from "@/components/supplyChainSteps";
import { FaDownload } from "react-icons/fa";

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
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw} million tonnes`;
          },
        },
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
          text: "Million Tonnes",
        },
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
        position: "right",
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

  return <Pie options={options} data={data} />;
};

const LineChart = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: $${context.raw}`;
          },
        },
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Price ($/tonne)",
        },
      },
    },
  };

  return <Line options={options} data={data} />;
};

export default function Agriculture() {
  // Data for charts (you can move this to separate files)
  const fertilizerDemandData = {
    labels: ["Phosphorus", "Potash", "Sulphur", "Zinc", "Boron", "Selenium"],
    datasets: [
      {
        label: "Domestic Production",
        data: [3.2, 0, 1.2, 2.3, 0, 0.02],
        backgroundColor: "#4CAF50",
      },
      {
        label: "Imports",
        data: [9.8, 4.4, 4.0, 0.5, 0.0066, 0.22],
        backgroundColor: "#FF9800",
      },
    ],
  };

  const potashSourcesData = {
    labels: ["Canada", "Belarus", "Israel", "Jordan", "Others"],
    datasets: [
      {
        data: [40, 20, 15, 15, 10],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  const priceTrendsData = {
    labels: ["2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Phosphorus Price ($/tonne)",
        data: [120, 135, 210, 195, 180],
        borderColor: "#4CAF50",
        fill: false,
      },
      {
        label: "Potash Price ($/tonne)",
        data: [220, 240, 420, 380, 350],
        borderColor: "#FF9800",
        fill: false,
      },
    ],
  };

  const handleDownload = () => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    console.log(basePath);
    const link = document.createElement("a");

    link.href = `${basePath}/assets/downloads/Agriculture.pdf`; // ✅ correct URL
    link.download = "Agriculture.pdf";
    console.log(link);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Layout
        breadcrumbCategory="Agriculture"
        breadcrumbPostTitle="Mineral Security in India's Agriculture Sector"
      >
        <section
          className="blog-details-area"
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
                        Mineral Security in India's Agriculture Sector
                      </h1>

                      <div className="post-meta">
                        <p className="date">
                          <b>Date</b> :- July 2025
                        </p>
                        <p className="author">
                          <b>Author(s)</b> :- By Prerna Bountra 

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
    margintop : "5px"
  }}
>
  <FaDownload className="me-1" style={{ fontSize: "0.85rem" }} />
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
                        <SupplyChainSteps />
                      </div>

                      <div className="content-section">
                        <h3 className="content-title">Overview</h3>
                        <p>
                          India's agricultural sector—on which over 60% of the
                          population depends directly or indirectly—relies
                          heavily on the uninterrupted supply of mineral-based
                          fertilizers. This dependency exposes a critical
                          vulnerability: in 2023 alone, India imported over 18
                          million tonnes of key fertilizer minerals, with import
                          reliance ranging from 50% to 100% across major inputs.
                          The implications are twofold—a significant economic
                          strain, reflected in the fertilizer subsidy bill
                          reaching ₹2.25 lakh crore in FY2023-24, and a growing
                          food security risk if global supply chains are
                          disrupted.
                        </p>
                        <p>
                          India's mineral security in agriculture is thus not
                          merely a question of cost or logistics—it is deeply
                          tied to agronomic productivity, ecological resilience,
                          and the safeguarding of national food sovereignty.
                          This security hinges on the consistent availability of
                          mineral fertilizers and micronutrients that correct
                          soil deficiencies, improve crop health, and enhance
                          yields. However, for each of these minerals, India
                          faces a distinct set of challenges spanning resource
                          scarcity, technological gaps, import dependencies, and
                          policy weaknesses.
                        </p>
                      </div>
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
