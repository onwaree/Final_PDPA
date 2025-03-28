import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import StickyNavigation from "./StickyNavigation";
import "./style.css" // ต้องมีไฟล์ CSS


function App() {
  return (
    <div>
      <StickyNavigation />
      <main className="et-main">
        <section className="et-slide" id="tab-es6">
          <Page1/>
        </section>
        <section className="et-slide" id="tab-flexbox">
          <Page2/>
        </section>
        <section className="et-slide" id="tab-react">
          <Page3/>
        </section>
        <section className="et-slide" id="tab-angular">
          <Page4/>
        </section>
      </main>
    </div>
  );
}

export default App;


