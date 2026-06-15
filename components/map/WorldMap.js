// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   ZoomableGroup,
// } from "react-simple-maps";
// import {exportImportRestrictions} from "@/util/mapData";
// import geo from "@/public/maps/topo.json"

// export const WorldMap = ({
//   selectedCountry,
//   selectedInitiative,
//   onCountrySelect,
//   onInitiativeSelect,
//   position,
//   setTooltipContent,
// }) => {
//   const geoUrl = geo; 

//   return (
//     <div className="position-relative">
//       <ComposableMap
//         projection="geoMercator"
//         projectionConfig={{ scale: 110 }}
//         width={1000}
//         height={750}
//       >
//         <rect x="0" y="0" width="100%" height="100%" fill="#e9f2fa" />
//         <ZoomableGroup center={position.coordinates} zoom={position.zoom}>
//           <Geographies geography={geoUrl}>
//             {({ geographies }) =>
//               geographies.map((geo) => {
//                 const countryName = geo.properties.NAME; 
//                 const countryData = exportImportRestrictions.find(
//                   (c) => c.country === countryName
//                 );
                
//                 const isSelectedCountry = selectedCountry && 
//                   countryName === selectedCountry.country;

//                 const isInitiativeCountry = selectedInitiative
//                   ? selectedInitiative.countries.includes(countryName)
//                   : false;

//                 let fillColor = "#DDDDDD"; 
                
//                 if (countryData) {
//                   fillColor = "#DDD"; 
//                 }
                
//                 if (isSelectedCountry) {
//                   fillColor = "#00997f"; 
//                 } else if (isInitiativeCountry) {
//                   fillColor = "#00997f";
//                 }
//                 return (
//                   <Geography
//                     key={geo.rsmKey}
//                     geography={geo}
//                     onMouseEnter={() => {
//                       setTooltipContent(countryName);
//                     }}
//                     onMouseLeave={() => {
//                       setTooltipContent("");
//                     }}
//                     onClick={() => {
//                       if (countryData) {
//                         onCountrySelect(countryData);
//                         onInitiativeSelect(null);
//                       }
//                     }}
//                     fill={fillColor}
//                     stroke="#FFFFFF"
//                     strokeWidth={0.5}
//                     style={{
//                       default: { outline: "none" },
//                       hover: {
//                         fill: isSelectedCountry ? "#00997f" : "#6BCB77",
//                         outline: "none",
//                         cursor: countryData ? "pointer" : "default",
//                       },
//                       pressed: {
//                         fill: isSelectedCountry ? "#00997f" : "#FFD700",
//                         outline: "none",
//                       },
//                     }}
//                   />
//                 );
//               })
//             }
//           </Geographies>
//         </ZoomableGroup>
//       </ComposableMap>
//     </div>
//   );
// };



import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { exportImportRestrictions } from "@/util/mapData";
import geo from "@/public/maps/topo.json";

export const WorldMap = ({
  selectedCountry,
  selectedInitiative,
  onCountrySelect,
  onInitiativeSelect,
  position,
  setTooltipContent,
  onPositionChange,
}) => {
  const geoUrl = geo;

  return (
    <div className="position-relative">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 110 }}
        width={1000}
        height={750}
      >
        {/* 🔴 Flat Red Background */}
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="#cc0000"
        />

        <ZoomableGroup
          center={position.coordinates}
          zoom={position.zoom}
          onMoveEnd={(newPosition) => {
            if (onPositionChange) {
              onPositionChange(newPosition);
            }
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geoItem) => {
                const countryName = geoItem.properties.NAME;

                const countryData = exportImportRestrictions.find(
                  (c) => c.country === countryName
                );

                const isSelectedCountry =
                  selectedCountry &&
                  countryName === selectedCountry.country;

                const isInitiativeCountry = selectedInitiative
                  ? selectedInitiative.countries.includes(countryName)
                  : false;

                /* 🎨 COLOR LOGIC */

                let fillColor = "#ffffff"; // ✅ Default ALL countries white

                // Selected country → Strong Blue
                if (isSelectedCountry) {
                  fillColor = "#01016f";
                }

                // Initiative countries → Light Blue
                else if (isInitiativeCountry) {
                  fillColor = "#01016f";
                }

                return (
                  <Geography
                    key={geoItem.rsmKey}
                    geography={geoItem}
                    onMouseEnter={() => setTooltipContent(countryName)}
                    onMouseLeave={() => setTooltipContent("")}
                    onClick={() => {
                      if (countryData) {
                        onCountrySelect(countryData);
                        onInitiativeSelect(null);
                      }
                    }}
                    fill={fillColor}
                    stroke="#9e9e9e" // 🩶 Gray Borders
                    strokeWidth={0.5}
                    style={{
                      default: {
                        outline: "none",
                      },
                      hover: {
                        fill: isSelectedCountry
                          ? "#1e90ff"
                          : "#f1f1f1",
                        outline: "none",
                        cursor: countryData
                          ? "pointer"
                          : "default",
                      },
                      pressed: {
                        fill: "#0984e3",
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};