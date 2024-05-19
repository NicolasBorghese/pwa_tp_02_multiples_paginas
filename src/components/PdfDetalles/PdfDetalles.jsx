import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    Image,
    StyleSheet,
    Link,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        padding: 20,
    },
    contenedorLogo: {
        backgroundColor: "#0f172A",
        padding: 20,
        marginBottom: 20,
    },
    logo: {
        width: "40%",
        marginHorizontal: "auto",
    },
    contenedorTituloCiudad: {
        marginBottom: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    imagenPrincipal: {
        width: "15%",
        borderRadius: 8,
        marginRight: 10,
    },
    textoTituloCiudad: {
        fontSize: 18,
        fontWeight: "bold",
    },
    textoDescripcion: {
        fontSize: 12,
        marginBottom: 20,
    },
    imagenGrande: {
        alignSelf: "center",
        width: "80%",
        marginBottom: 20,
        borderRadius: 8,
    },
    contenedorDatos: {
        marginBottom: 20,
        display: "flex",
        flexDirection: "row",
    },
    contenedorInformacion: {
        marginRight: 60,
    },
    subtitulo: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    listItem: {
        fontSize: 12,
        marginLeft: 10,
    },
    footer: {
        backgroundColor: "#0f172A",
        padding: 10,
    },
    tituloFooter: {
        fontSize: 14,
        marginHorizontal: "auto",
        marginBottom: 10,
        color: "white",
        fontWeight: "bold",
    },
    textoFooter: {
        fontSize: 10,
        color: "white",
        marginHorizontal: "auto",
    },
});

const PdfDetalles = ({ datosDestino, numeroImagenCentral }) => (
    <Document>
        <Page style={styles.page}>
            <View style={styles.contenedorLogo}>
                <Link src="https://github.com/NicolasBorghese/pwa_tp_02_multiples_paginas">
                    <Image
                        src="/assets/logoNuevoDestino1.png"
                        alt="Logo Nuevo Destino"
                        style={styles.logo}
                    />
                </Link>
            </View>
            <View style={styles.contenedorTituloCiudad}>
                <Image
                    src={datosDestino.imagenPrincipal}
                    alt="Imagen miniatura"
                    style={styles.imagenPrincipal}
                />
                <Text style={styles.textoTituloCiudad}>
                    {datosDestino.ciudad}
                </Text>
            </View>
            <Text style={styles.textoDescripcion}>
                {datosDestino.descripcion}
            </Text>
            <Image
                src={datosDestino.imagenes[numeroImagenCentral]}
                alt="Imagen grande"
                style={styles.imagenGrande}
            />
            <View style={styles.contenedorDatos}>
                <View style={styles.contenedorInformacion}>
                    <Text style={styles.subtitulo}>Información:</Text>
                    <Text style={styles.listItem}>
                        País: {datosDestino.pais}
                    </Text>
                    <Text style={styles.listItem}>
                        Lenguaje: {datosDestino.lenguaje}
                    </Text>
                    <Text style={styles.listItem}>
                        Zona horaria: {datosDestino.zonaHoraria}
                    </Text>
                </View>
                <View style={styles.contenedorLugaresFamosos}>
                    <Text style={styles.subtitulo}>Lugares famosos:</Text>
                    {datosDestino.lugaresFamosos.map((lugar, index) => (
                        <Text key={index} style={styles.listItem}>
                            {lugar}
                        </Text>
                    ))}
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.tituloFooter}>2024 Grupo 04 PWA</Text>
                <Text style={styles.textoFooter}>Borghese Nicolás FAI-997</Text>
                <Text style={styles.textoFooter}>Blanco Julián FAI-3858</Text>
            </View>
        </Page>
    </Document>
);

export default PdfDetalles;
