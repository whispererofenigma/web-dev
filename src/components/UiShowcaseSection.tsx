const UiShowcaseSection = () => {
  return (
    <section id="ui-showcase" className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Intuitive UI, Powerful Functionality
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          We believe even the most complex features should be presented with a
          clean, intuitive, and responsive user interface.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {/* Column 1: Buttons & Toggles */}
          <div className="bg-background shadow-neumorphic p-6 rounded-2xl space-y-4">
            <h3 className="font-bold text-lg mb-2">Controls</h3>
            <button className="bg-background shadow-neumorphic rounded-full p-3 active:shadow-neumorphic-inset">
              Primary Action
            </button>
            <button className="bg-background shadow-neumorphic-inset rounded-full p-3">
              Secondary Action
            </button>
          </div>

          {/* Column 2: Data & Progress */}
          <div className="bg-background shadow-neumorphic p-6 rounded-2xl space-y-4">
            <h3 className="font-bold text-lg mb-2">Data Display</h3>
            <p>Task Progress</p>
            <div className="w-full bg-background shadow-neumorphic-inset rounded-full h-4">
              <div
                className="bg-primary h-4 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>

          {/* Column 3: Panels & Modals */}
          <div className="bg-background shadow-neumorphic p-6 rounded-2xl space-y-4">
            <h3 className="font-bold text-lg mb-2">Panels</h3>
            <div className="bg-background shadow-neumorphic-inset p-4 rounded-lg">
              <p className="font-semibold">Notification</p>
              <p className="text-sm">Your data has been successfully synced.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UiShowcaseSection;