import { encodeAddress, decodeAddress } from "@polkadot/util-crypto";
import axios from "axios";
import { useState } from "react";

function App() {
  const graphqlAPI =
    "https://squid.subsquid.io/polkadot-psp34-nft-indexing/v/v1/graphql";
  const [walletAddress, setWalletAddress] = useState(null);
  const [astarWalletAddress, setAstarWalletAddress] = useState(null);
  const [mainWalletAddress, setMainWalletAddress] = useState(null);
  const [inputBorder, setInputBorder] = useState("input-bordered");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [nftList, setNftList] = useState(null);

  const onChangeWalletAddress = (e) => {
    setWalletAddress(e.target.value);
    try {
      setAstarWalletAddress(encodeAddress(decodeAddress(e.target.value), "5"));
      setMainWalletAddress(encodeAddress(decodeAddress(e.target.value), "42"));
      setInputBorder("input-success");
      setIsButtonDisabled(false);
    } catch (err) {
      setInputBorder("input-error");
      setIsButtonDisabled(true);
    }
  };

  const getNftList = () => {
    const query = `
      query MyQuery {
        tokens(where: {owner_eq: "${astarWalletAddress}"}) {
          tokenId
          contractAddress
          owner
        }
    }`;
    const result = axios.post(
      graphqlAPI,
      {
        query: query,
      },
      {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    );

    setNftList(result.data.tokens);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold my-2">NFT Viewer</h1>

      <div className="my-2 flex flex-row">
        <input
          type="text"
          placeholder="Wallet Address"
          className={`input input-primary w-full max-w-xs ${inputBorder}`}
          value={walletAddress}
          onChange={onChangeWalletAddress}
          war
        />
        <button
          onClick={() => getNftList()}
          className="btn btn-primary ml-2"
          disabled={isButtonDisabled}
        >
          View NFT(s)
        </button>
      </div>

      <div>
        <p>Astar Address: {astarWalletAddress}</p>
        <p>Polkadot Address: {mainWalletAddress}</p>
      </div>

      {/* nft list */}
      <div className="overflow-x-auto">
        <h2 className="text-2xl font-bold my-2">NFT List</h2>
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-3@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td>
                Carroll Group
                <br />
                <span className="badge badge-ghost badge-sm">
                  Tax Accountant
                </span>
              </td>
              <td>Red</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-4@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>
              <td>
                Rowe-Schoen
                <br />
                <span className="badge badge-ghost badge-sm">
                  Office Assistant I
                </span>
              </td>
              <td>Crimson</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-5@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td>
                Wyman-Ledner
                <br />
                <span className="badge badge-ghost badge-sm">
                  Community Outreach Specialist
                </span>
              </td>
              <td>Indigo</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default App;
