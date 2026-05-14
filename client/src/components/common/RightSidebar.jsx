const RightSidebar = () => {
  return (
    <div className="w-72 h-screen fixed right-0 bg-slate-900 border-l border-slate-800 p-6">
      <h2 className="text-2xl font-bold mb-6">Trending</h2>

      <div className="space-y-5">
        <div className="bg-slate-800 p-4 rounded-xl">
          #Placements2026
        </div>

        <div className="bg-slate-800 p-4 rounded-xl">
          Google Hiring Drive
        </div>

        <div className="bg-slate-800 p-4 rounded-xl">
          Alumni Meetup Event
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;