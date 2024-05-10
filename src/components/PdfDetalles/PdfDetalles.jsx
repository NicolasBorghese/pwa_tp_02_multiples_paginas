import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    Image,
    StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        padding: 20,
    },
    section: {
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    description: {
        fontSize: 12,
        marginBottom: 10,
    },
    image: {
        alignSelf: "center",
        width: "90%",
        marginBottom: 10,
        borderRadius: 8,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    listItem: {
        fontSize: 12,
        marginLeft: 10,
    },
});

const PdfDetalles = ({ datosDestino }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.title}>{datosDestino.ciudad}</Text>
                <Text style={styles.description}>
                    {datosDestino.descripcion}
                </Text>
                <Image
                    src={datosDestino.imagenPrincipal}
                    style={styles.image}
                />
                <Text style={styles.subtitle}>Información:</Text>
                <Text style={styles.listItem}>País: {datosDestino.pais}</Text>
                <Text style={styles.listItem}>
                    Lenguaje: {datosDestino.lenguaje}
                </Text>
                <Text style={styles.listItem}>
                    Zona horaria: {datosDestino.zonaHoraria}
                </Text>
                <Text style={styles.subtitle}>Lugares famosos:</Text>
                {datosDestino.lugaresFamosos.map((lugar, index) => (
                    <Text key={index} style={styles.listItem}>
                        {lugar}
                    </Text>
                ))}
            </View>
        </Page>
    </Document>
);

export default PdfDetalles;
