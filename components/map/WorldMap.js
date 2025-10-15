import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import {exportImportRestrictions} from "@/util/mapData";

export const WorldMap = ({
  selectedCountry,
  selectedInitiative,
  onCountrySelect,
  onInitiativeSelect,
  position,
  setTooltipContent,
}) => {
  const geoUrl =
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

  return (
    <div className="position-relative">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 110 }}
        width={1000}
        height={750}
      >
        <rect x="0" y="0" width="100%" height="100%" fill="#e9f2fa" />
        <ZoomableGroup center={position.coordinates} zoom={position.zoom}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const countryName = geo.properties.name;
                const countryData = exportImportRestrictions.find(
                  (c) => c.country === countryName
                );
                const isInitiativeCountry = selectedInitiative
                  ? selectedInitiative.countries.includes(countryName)
                  : false;
                const isHighlighted =
                  (selectedCountry &&
                    countryData &&
                    countryData.country === selectedCountry.country) ||
                  isInitiativeCountry;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      setTooltipContent(countryName);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    // onClick={() => {
                    //   if (countryData && !selectedInitiative) {
                    //     onCountrySelect(countryData);
                    //     onInitiativeSelect(null);
                    //   }
                    // }}
                    fill={
                      isHighlighted
                        ? selectedInitiative
                          ? "#00997f"
                          : "#00997f"
                        : countryData
                        ? "#DDD"
                        : "#DDDDDD"
                    }
                    stroke="#FFFFFF"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                   
                      pressed: {
                        fill: isHighlighted
                          ? selectedInitiative
                            ? "#FF6F61"
                            : "#FFD700"
                          : "#6BCB77",
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
