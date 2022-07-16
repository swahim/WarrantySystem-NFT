import { create } from "ipfs-http-client";

const ipfs = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});

import { useState } from "react";
const UploadingMetadata = () => {
  const today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const [serialNumber, setSerialNumber] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [buyDate, setBuyDate] = useState("");
  const [warrantyExpiring, setWarrantyExpiring] = useState("");
  const [imageHash, setImageHash] = useState("");
  const [metadataHash, setMetadataHash] = useState("No hash");
  const metadata = {
    "Serial Number": serialNumber,
    type: type,
    image: imageHash,
    properties: {
      name: {
        type: "string",
        description: name,
      },
      description: {
        type: "string",
        description: description,
      },
      "Buy Date": {
        type: "string",
        description: buyDate,
      },
      "Warranty Expiring": {
        type: "string",
        description: warrantyExpiring,
      },
    },
  };

  const setVariables = async (
    _serialNumber,
    _Name,
    _Description,
    _type,
    _imageHash,
    _warrantyTime
  ) => {
    console.log("setVariables");
    await setSerialNumber(_serialNumber);
    console.log(serialNumber);
    setName(_Name);
    setDescription(_Description);
    setType(_type);
    setBuyDate(date);
    setImageHash(_imageHash);
    const numberOfDaysToAdd = _warrantyTime * 365;
    today.setDate(today.getDate() + numberOfDaysToAdd);
    const warrantyDate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    setWarrantyExpiring(warrantyDate);
    console.log(warrantyExpiring);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await setVariables(
      "13131",
      "Supreme tshirt",
      "best tshirt",
      "shirt",
      "some Hash",
      1
    );
    

    const jsonData = JSON.stringify(metadata);
    let result = await ipfs.add(jsonData);
    console.log(result);
    setMetadataHash(result.path);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <button>Get Hash</button>
      </form>
      <a href={`https://ipfs.infura.io/ipfs/${metadataHash}`}>{metadataHash}</a>
    </div>
  );
};

export default UploadingMetadata;
