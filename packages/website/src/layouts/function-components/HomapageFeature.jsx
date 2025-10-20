import { humanize } from "@/lib/utils/textConverter";
import * as Icon from "react-feather";

const HomapageFeature = ({ feature_list }) => {
  // Icon name mapping for special cases
  const iconMap = {
    "check-circle": "CheckCircle",
    "bar-chart-2": "BarChart2",
    "check": "Check",
  };

  return (
    <div className="key-feature-grid mt-10 grid grid-cols-2 gap-7 md:grid-cols-3 xl:grid-cols-4">
      {feature_list.map((item, i) => {
        // Use mapped name or humanized name
        const iconName = iconMap[item.icon] || humanize(item.icon);
        const FeatherIcon = Icon[iconName];

        return (
          <div
            key={i}
            className="flex flex-col justify-between rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition"
          >
            <div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{item.content}</p>
            </div>
            <span className="icon mt-6 text-primary">
              {FeatherIcon ? <FeatherIcon size={24} /> : <Icon.AlertCircle size={24} />}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default HomapageFeature;
