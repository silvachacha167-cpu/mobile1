
import { useState } from "react";

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  ScrollView,
  useWindowDimensions,
} from "react-native";

export default function App() {
  const [nome, setNome] = useState("");
  const [contador, setContador] = useState(0);
  const [temaEscuro, setTemaEscuro] = useState(false);

  // META DIÁRIA DO APLICATIVO
  const meta = 10;

  // CÁLCULO DO PROGRESSO
  const progresso = Math.min((contador / meta) * 100, 100);

  // IDENTIFICAR TAMANHO DA TELA
  const { width } = useWindowDimensions();
  const telaPequena = width < 380;

  // CORES DO APLICATIVO
  const corFundo = temaEscuro ? "#0F172A" : "#F1F5F9";
  const corTexto = temaEscuro ? "#F8FAFC" : "#0F172A";
  const corCartao = temaEscuro ? "#1E293B" : "#FFFFFF";

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: corFundo },
      ]}
    >

      <StatusBar
        barStyle={temaEscuro ? "light-content" : "dark-content"}
      />

      <ScrollView contentContainerStyle={styles.conteudo}>

        {/* CARTÃO PRINCIPAL */}
        <View
          style={[
            styles.cartao,
            { backgroundColor: corCartao },
          ]}
        >

          {/* TÍTULO */}
          <Text
            style={[
              styles.titulo,
              { fontSize: telaPequena ? 20 : 24 },
            ]}
          >
            Meu Contador de Metas
          </Text>

          <Text style={styles.subtitulo}>
            Programação Mobile I
          </Text>

          {/* CAMPO PARA DIGITAR O NOME */}
          <TextInput
            style={[
              styles.input,
              {
                color: corTexto,
                borderColor: temaEscuro ? "#475569" : "#CBD5E1",
              },
            ]}
            placeholder="Digite seu nome"
            placeholderTextColor="#64748B"
            value={nome}
            onChangeText={setNome}
          />

          {/* MENSAGEM DE BOAS-VINDAS */}
          <Text style={[styles.boasVindas, { color: corTexto }]}>
            {nome.trim()
              ? `Olá, ${nome.trim()}!`
              : "Olá, estudante!"}
          </Text>

          {/* PROGRESSO DA META */}
          <View style={styles.linhaMeta}>

            <Text style={{ color: corTexto }}>
              Progresso da meta
            </Text>

            <Text style={{ color: corTexto }}>
              {contador} / {meta}
            </Text>

          </View>

          {/* BARRA DE PROGRESSO */}
          <View style={styles.barraFundo}>

            <View
              style={[
                styles.barraProgresso,
                { width: `${progresso}%` },
              ]}
            />

          </View>

          <Text
            style={[
              styles.textoProgresso,
              { color: corTexto },
            ]}
          >
            {Math.round(progresso)}% concluído
          </Text>

          {/* MENSAGEM DA META */}
          {contador >= meta ? (

            <Text style={styles.mensagem}>
              Parabéns! Você chegou a 10 ou mais!
            </Text>

          ) : (

            <Text style={styles.dica}>
              Continue testando os botões.
            </Text>

          )}

          {/* PRIMEIRA LINHA DE BOTÕES */}
          <View style={styles.linhaBotoes}>

            <Pressable
              disabled={contador === 0}
              style={[
                styles.botao,
                styles.botaoMenos,
                contador === 0 && styles.botaoDesabilitado,
              ]}
              onPress={() =>
                setContador((valor) => Math.max(0, valor - 1))
              }
            >
              <Text style={styles.textoBotao}>
                − Diminuir
              </Text>
            </Pressable>

            <Pressable
              style={[styles.botao, styles.botaoMais]}
              onPress={() =>
                setContador((valor) => valor + 1)
              }
            >
              <Text style={styles.textoBotao}>
                + Adicionar
              </Text>
            </Pressable>

          </View>

          {/* SEGUNDA LINHA DE BOTÕES */}
          <View style={styles.linhaBotoes}>

            <Pressable
              style={[styles.botao, styles.botaoZerar]}
              onPress={() => setContador(0)}
            >
              <Text style={styles.textoBotao}>
                Zerar
              </Text>
            </Pressable>

            <Pressable
              style={[styles.botao, styles.botaoTema]}
              onPress={() =>
                setTemaEscuro((valor) => !valor)
              }
            >
              <Text style={styles.textoBotao}>
                {temaEscuro ? "Tema claro" : "Mudar tema"}
              </Text>
            </Pressable>

          </View>

        </View>

        {/* RODAPÉ */}
        <Text style={[styles.rodape, { color: corTexto }]}>
          Desenvolvido na aula de Mobile I
        </Text>

      </ScrollView>

    </View>
  );
}

// ESTILIZAÇÃO DO APLICATIVO
const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  conteudo: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 40,
  },

  cartao: {
    width: "100%",
    maxWidth: 430,
    borderRadius: 22,
    padding: 22,
    elevation: 4,
    shadowColor: "#000000",
    shadowOpacity: 0.12,
    shadowRadius: 10,
  },

  titulo: {
    fontWeight: "700",
    color: "#1E3A8A",
    textAlign: "center",
  },

  subtitulo: {
    fontSize: 15,
    color: "#64748B",
    textAlign: "center",
    marginTop: 6,
    marginBottom: 18,
  },

  input: {
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 12,
    padding: 13,
  },

  boasVindas: {
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 15,
  },

  // ESTILOS DA META
  linhaMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  barraFundo: {
    height: 10,
    backgroundColor: "#E2E8F0",
    borderRadius: 20,
    overflow: "hidden",
  },

  barraProgresso: {
    height: 10,
    backgroundColor: "#22A447",
    borderRadius: 20,
  },

  textoProgresso: {
    textAlign: "center",
    marginTop: 8,
    marginBottom: 15,
  },

  mensagem: {
    color: "#15803D",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 14,
  },

  dica: {
    color: "#64748B",
    textAlign: "center",
    marginBottom: 14,
  },

  // ESTILOS DOS BOTÕES
  linhaBotoes: {
    flexDirection: "row",
    marginBottom: 10,
  },

  botao: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  botaoMenos: {
    backgroundColor: "#2563EB",
    marginRight: 6,
  },

  botaoMais: {
    backgroundColor: "#16A34A",
    marginLeft: 6,
  },

  botaoZerar: {
    backgroundColor: "#64748B",
    marginRight: 6,
  },

  botaoTema: {
    backgroundColor: "#7C3AED",
    marginLeft: 6,
  },

  botaoDesabilitado: {
    opacity: 0.45,
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  // RODAPÉ
  rodape: {
    marginTop: 18,
    fontSize: 12,
    textAlign: "center",
  },

});
