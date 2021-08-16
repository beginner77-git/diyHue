import { MdSystemUpdate } from "react-icons/md";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const LightUpdate = ({ light, lightsCatalog, setMessage, setType }) => {
  const updateAlert = () => {
    confirmAlert({
      title: "Update light " + light["name"] + " firmware?",
      message: "Are you sure to do this?",
      buttons: [
        {
          label: "Yes",
          onClick: () => UpdateLight(),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const UpdateLight = () => {
    setMessage("Begin light firmware update");
    setType("none");
    setType("success");
  }



  return (
    <>
      {['native_single', 'native_multi'].includes(light["protocol"]) &&
        light["protocol_cfg"]["type"] !== 'undefined' &&
        light["protocol_cfg"]["version"] === lightsCatalog[light["protocol_cfg"]["type"]]["version"] &&
        <div className="btn blue"><MdSystemUpdate title="Update available" onClick={() => updateAlert()} /></div>
      }
    </>


  );
};

export default LightUpdate;