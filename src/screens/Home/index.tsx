import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participant } from "../../components/Participants";
import { styles } from "./styles";

export function Home() {
  const handleParticipantAdd = () => {
    console.log("Você Clicou");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento!</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="nome do participante"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Participant name="Luiz" />
      <Participant name="Estefane" />
      <Participant name="Emma" />
    </View>
  );
}
