export default function FeatureCard({
  icon,
  title,
  desc,
  iconBg,
  iconColor,
}) {
  return (
    <div
      className="
        bg-white
        border border-gray-200
        rounded-[16px]
        p-8
        transition
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-6`}
      >
        <div className={iconColor}>{icon}</div>
      </div>

      {/* Title */}
      <h3 className="text-[18px] font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[14px] text-gray-600 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
