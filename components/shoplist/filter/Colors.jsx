const colors = [
  "#0a2472",
  "#d7bb4f",
  "#282828",
  "#b1d6e8",
  "#9c7539",
  "#d29b48",
  "#e6ae95",
  "#d76b67",
  "#bababa",
  "#bfdcc4",
];

export default function Colors() {
  return (
    <div className="accordion" id="color-filters">
      <div className="accordion-item mb-4 pb-3">
        <h5 className="accordion-header" id="accordion-heading-1">
          <button
            className="accordion-button p-0 border-0 fs-5 text-uppercase"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#accordion-filter-2"
            aria-expanded="true"
            aria-controls="accordion-filter-2"
          >
            Color
            <svg
              className="accordion-button__icon type2"
              viewBox="0 0 10 6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g aria-hidden="true" stroke="none" fillRule="evenodd">
                <path d="M5.35668 0.159286C5.16235 -0.053094 4.83769 -0.0530941 4.64287 0.159286L0.147611 5.05963C-0.0492049 5.27473 -0.049205 5.62357 0.147611 5.83813C0.344427 6.05323 0.664108 6.05323 0.860924 5.83813L5 1.32706L9.13858 5.83867C9.33589 6.05378 9.65507 6.05378 9.85239 5.83867C10.0492 5.62357 10.0492 5.27473 9.85239 5.06018L5.35668 0.159286Z" />
              </g>
            </svg>
          </button>
        </h5>
        <div
          id="accordion-filter-2"
          className="accordion-collapse collapse show border-0"
          aria-labelledby="accordion-heading-1"
          data-bs-parent="#color-filters"
        >
          <div className="accordion-body px-0 pb-0">
            <div className="d-flex flex-wrap">
              {colors.map((elm, i) => (
                <a
                  key={i}
                  href="#"
                  className="swatch-color js-filter"
                  style={{ color: elm }}
                ></a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.accordion-item --> */}
    </div>
  );
}
