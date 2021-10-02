import "./center2.css";

export default function Center2() {
  return (
    <div className="group-6">
      <div className="overlap-group-1">
        <div className="rectangle-5"></div>
        <Group5 />
        <div className="group-13">
          <div className="text-1 icofont-regular-normal-white-48px"></div>
          <i class="bi bi-pie-chart-fill datastore"></i>
          <div className="total-profit montserrat-semi-bold-white-24px">
            Total Profit
          </div>
          <h1 className="price-1">$25000</h1>

          <div className="increased-by-30 montserrat-semi-bold-white-24px">
            Increased by 30%
          </div>
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="group-5">
      <div classlame="overlap-group1">
        <div className="ellipse-4"></div>
        <div className="ellipse-5"></div>
      </div>
    </div>
  );
}
