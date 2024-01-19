import { useState, useEffect, lazy, Suspense } from "react";
import { GetWallet } from "../Service/Wallet";
function Home() {
  const [dataWallet, setDataWallet] = useState([]);
  const [infoWallet, setInfoWallet] = useState({
    IdCartera: 0,
    NombreCuenta: "",
  });

  const Percentage = lazy(() => import("./Percentage"));

  const loadTableData = async () => {
    let rsp = await GetWallet(infoWallet);
    setDataWallet(rsp);
  };

  useEffect(() => {
    loadTableData();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <br />
        <br />
        <div className="row">
          {dataWallet.map((wallet) => (
            <div key={wallet.idCartera} className="col-md-4 mb-3">
              <div className="card">
                <div className="card-header">{wallet.nombreCuenta}</div>
                <div className="card-body">
                  <p className="card-text">
                    Saldo Actual: {wallet.saldoActual}
                  </p>
                  <Suspense fallback={<h1>Cargando...</h1>}>
                    <Percentage id={wallet.idCartera}></Percentage>
                  </Suspense>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
