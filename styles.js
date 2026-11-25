import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  conteudo: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 40,
    paddingBottom: 30,
  },

  cartao: {
    width: "100%",
    maxWidth: 430,
    borderRadius: 28,
    padding: 22,
    elevation: 8,
    shadowColor: "#DB2777",
    shadowOpacity: 0.2,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 6 },
  },

  cabecalho: {
    alignItems: "center",
    marginBottom: 12,
  },

  etiqueta: {
    color: "#EC4899",
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 2,
    marginBottom: 8,
  },

  titulo: {
    fontSize: 25,
    fontWeight: "900",
    color: colors.primary,
    textAlign: "center",
  },

  subtitulo: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 7,
    marginBottom: 20,
  },

  input: {
    borderWidth: 1.5,
    borderRadius: 16,
    padding: 14,
    fontSize: 15,
    marginBottom: 12,
  },

  boasVindas: {
    fontSize: 18,
    fontWeight: "800",
    textAlign: "center",
    marginVertical: 12,
  },

  visor: {
    borderRadius: 20,
    padding: 18,
    alignItems: "center",
    marginVertical: 10,
  },

  legendaVisor: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 5,
  },

  numero: {
    fontSize: 42,
    fontWeight: "900",
  },

  textoVisor: {
    fontSize: 13,
    marginTop: 3,
  },

  linhaMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 9,
  },

  barraFundo: {
    height: 13,
    borderRadius: 20,
    overflow: "hidden",
  },

  barraProgresso: {
    height: 13,
    backgroundColor: colors.progress,
    borderRadius: 20,
  },

  textoProgresso: {
    textAlign: "center",
    marginTop: 8,
    marginBottom: 15,
    fontWeight: "700",
  },

  mensagem: {
    color: "#A855F7",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 14,
    fontSize: 15,
  },

  dica: {
    textAlign: "center",
    marginBottom: 14,
  },

  linhaBotoes: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 11,
  },

  botao: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#EC4899",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },

  botaoMenos: {
    backgroundColor: colors.primary,
    marginRight: 6,
  },

  botaoMais: {
    backgroundColor: colors.success,
    marginLeft: 6,
  },

  botaoZerar: {
    backgroundColor: colors.secondary,
    marginRight: 6,
  },

  botaoTema: {
    backgroundColor: colors.purple,
    marginLeft: 6,
  },

  botaoDesabilitado: {
    opacity: 0.4,
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },

  rodape: {
    marginTop: 18,
    fontSize: 12,
    textAlign: "center",
  },

  confete: {
    position: "absolute",
    top: 0,
    right: 0,
    fontSize: 27,
  },
});

export default styles;
