import CardCard from './CardCard'
import './Sect1.css'


function Sect1() {
  return (
    <div className="card">
      <div className="card-body">
        <h1>Cards</h1>
      </div>

      <div className="card-content">
        <CardCard />

        <div className="details">
          <div className="card-deatils-1">
            <div>
              <h6>Currrent balance :</h6>

              <span style={{ color: "#197bbd" }}>
                <span className="currency">$</span>
                <span className="amount">12,000.00</span>
              </span>
            </div>

            <div className="add-money">
              <button>
                <span>
                  <span className="add-sign">+</span>
                  <span className="add-text">Add Money</span>
                </span>
              </button>
            </div>
          </div>
          <div className="card-deatils-2">
            <div>
              <h6>Income:</h6>

              <span style={{ color: "#439a86" }}>
                <span className="currency">$</span>
                <span className="amount">1,500.00</span>
              </span>
            </div>

            <div className="add-money">
              <button style={{ background: "#439a86" }}>
                <span>
                  <span className="add-sign">
                    
                  </span>
                  <span className="add-text">Save Income</span>
                </span>
              </button>
            </div>
          </div>
          <div className="card-deatils-3">
            <div>
              <h6>Outcome :</h6>

              <span style={{ color: "#bb4430" }}>
                <span className="currency">$</span>
                <span className="amount">350.20</span>
              </span>
            </div>

            <div className="add-money">
              <button>
                <span>
                  <span className="add-sign"></span>
                  <span className="add-text">Manage Outcome</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sect1