const accordionData = [
  {
    id: 1,
    heading: "Bring of had which their whose you're it own?",
    body: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    expanded: true,
  },
  {
    id: 2,
    heading: "Over shall air can't subdue fly divide him?",
    body: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    expanded: false,
  },
  {
    id: 3,
    heading: "Waters one you'll creeping?",
    body: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    expanded: false,
  },
];

const accordionData2 = [
  {
    id: 1,
    heading: "Bring of had which their whose you're it own?",
    body: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    expanded: true,
  },
  {
    id: 2,
    heading: "Over shall air can't subdue fly divide him?",
    body: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    expanded: false,
  },
  {
    id: 3,
    heading: "Waters one you'll creeping?",
    body: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    expanded: false,
  },
];
const accordionData3 = [
  {
    id: 1,
    heading: "Bring of had which their whose you're it own?",
    body: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    expanded: true,
  },
  {
    id: 2,
    heading: "Over shall air can't subdue fly divide him?",
    body: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    expanded: false,
  },
  {
    id: 3,
    heading: "Waters one you'll creeping?",
    body: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    expanded: false,
  },
];
export default function Faq() {
  return (
    <section className="container mw-930 lh-30">
      <h2 className="section-title text-uppercase fw-bold mb-5">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <h3 className="mb-4">Orders</h3>
      <div id="faq_accordion" className="faq-accordion accordion mb-5">
        {accordionData.map((item) => (
          <div key={item.id} className="accordion-item">
            <h5
              className="accordion-header"
              id={`faq-accordion-heading-${item.id}`}
            >
              <button
                className={`accordion-button ${
                  !item.expanded ? "collapsed" : ""
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#faq-accordion-collapse-${item.id}`}
                aria-expanded={item.expanded}
                aria-controls={`faq-accordion-collapse-${item.id}`}
              >
                {item.heading}
                <svg className="accordion-button__icon" viewBox="0 0 14 14">
                  <g aria-hidden="true" stroke="none" fillRule="evenodd">
                    <path
                      className="svg-path-vertical"
                      d="M14,6 L14,8 L0,8 L0,6 L14,6"
                    ></path>
                    <path
                      className="svg-path-horizontal"
                      d="M14,6 L14,8 L0,8 L0,6 L14,6"
                    ></path>
                  </g>
                </svg>
              </button>
            </h5>
            <div
              id={`faq-accordion-collapse-${item.id}`}
              className={`accordion-collapse collapse ${
                item.expanded ? "show" : ""
              }`}
              aria-labelledby={`faq-accordion-heading-${item.id}`}
              data-bs-parent="#faq_accordion"
            >
              <div className="accordion-body">
                <p>{item.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3 className="mb-4">Shipping</h3>
      <div id="faq_accordion_2" className="faq-accordion accordion mb-5">
        {accordionData2.map((item) => (
          <div key={item.id} className="accordion-item">
            <h5
              className="accordion-header"
              id={`faq-accordion-heading-2-${item.id}`}
            >
              <button
                className={`accordion-button ${
                  !item.expanded ? "collapsed" : ""
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#faq-accordion-collapse-2-${item.id}`}
                aria-expanded={item.expanded}
                aria-controls={`faq-accordion-collapse-2-${item.id}`}
              >
                {item.heading}
                <svg className="accordion-button__icon" viewBox="0 0 14 14">
                  <g aria-hidden="true" stroke="none" fillRule="evenodd">
                    <path
                      className="svg-path-vertical"
                      d="M14,6 L14,8 L0,8 L0,6 L14,6"
                    ></path>
                    <path
                      className="svg-path-horizontal"
                      d="M14,6 L14,8 L0,8 L0,6 L14,6"
                    ></path>
                  </g>
                </svg>
              </button>
            </h5>
            <div
              id={`faq-accordion-collapse-2-${item.id}`}
              className={`accordion-collapse collapse ${
                item.expanded ? "show" : ""
              }`}
              aria-labelledby={`faq-accordion-heading-2-${item.id}`}
              data-bs-parent="#faq_accordion_2"
            >
              <div className="accordion-body">
                <p>{item.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3 className="mb-4">Payment</h3>
      <div id="faq_accordion_3" className="faq-accordion accordion mb-5">
        {accordionData3.map((item) => (
          <div key={item.id} className="accordion-item">
            <h5
              className="accordion-header"
              id={`faq-accordion-heading-3-${item.id}`}
            >
              <button
                className={`accordion-button ${
                  !item.expanded ? "collapsed" : ""
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#faq-accordion-collapse-3-${item.id}`}
                aria-expanded={item.expanded}
                aria-controls={`faq-accordion-collapse-3-${item.id}`}
              >
                {item.heading}
                <svg className="accordion-button__icon" viewBox="0 0 14 14">
                  <g aria-hidden="true" stroke="none" fillRule="evenodd">
                    <path
                      className="svg-path-vertical"
                      d="M14,6 L14,8 L0,8 L0,6 L14,6"
                    ></path>
                    <path
                      className="svg-path-horizontal"
                      d="M14,6 L14,8 L0,8 L0,6 L14,6"
                    ></path>
                  </g>
                </svg>
              </button>
            </h5>
            <div
              id={`faq-accordion-collapse-3-${item.id}`}
              className={`accordion-collapse collapse ${
                item.expanded ? "show" : ""
              }`}
              aria-labelledby={`faq-accordion-heading-3-${item.id}`}
              data-bs-parent="#faq_accordion_3"
            >
              <div className="accordion-body">
                <p>{item.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
