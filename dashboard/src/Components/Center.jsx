import "./center.css";

export default function Center() {
  return (
    <div className="group-4">
      <div className="overlap-group">
        <div className="rectangle-4"></div>
        <div className="ellipse-2"></div>
        <div className="ellipse-3"></div>
        <div className="group-12">
          <div className="text1 icofont-regular-normal-white-40px"></div>
          <i class="bi bi-graph-up graph"></i>
          <div className="stock-total montserrat-semi-bold-white-24px">
            Stock Total
          </div>
          <h1 className="price">$150000</h1>
          <div className="increased-by-60 montserrat-semi-bold-white-24px">
            Increased by 60%
          </div>
        </div>
      </div>
    </div>
  );
}
