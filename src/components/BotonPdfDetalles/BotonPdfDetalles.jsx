import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfDetalles from "../PdfDetalles/PdfDetalles";

const BotonPdfDetalles = ({ datosDestino }) => {
    return (
        <div>
            <PDFDownloadLink
                document={<PdfDetalles datosDestino={datosDestino} />}
                fileName={`${datosDestino.ciudad}.pdf`}
            >
                <button className="text-white end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Descargar PDF
                </button>
            </PDFDownloadLink>
        </div>
    );
};

export default BotonPdfDetalles;
