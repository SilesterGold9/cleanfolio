const SkillCard = ({ icon: Icon, name, level, description }) => {
  return (
    <div className="flex flex-col p-4 rounded-xl border border-gray-800 bg-[#161922] hover:border-[#9ef01a] transition-colors">
      <div className="flex items-center gap-3 mb-2">
        {Icon && <Icon size={20} className="text-[#9ef01a]" />}
        <h4 className="font-semibold text-gray-200">{name}</h4>
      </div>
      {level && (
        <span className="text-sm text-gray-400 mb-1">Level: {level}</span>
      )}
      {description && <p className="text-gray-400 text-sm">{description}</p>}
    </div>
  );
};

export default SkillCard;
