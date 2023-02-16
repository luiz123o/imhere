import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Participant } from "../../components/Participants";
import { styles } from "./styles";

const participants = ["Luiz", "Estefane", "Emma"];

export function Home() {
  const handleParticipantAdd = () => {
    if (participants.includes("Luiz")) {
      return Alert.alert("Já existe");
    }
    console.log("Você Clicou");
  };

  const handleParticipantRemove = (name: string) => {
    if (participants.includes("Luiz")) {
      return Alert.alert("Remover", `Remover ${name}`, [
        {
          text: "Sim",
          onPress: () => Alert.alert("Deletado"),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]);
    }
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
      <FlatList
        showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            key={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Nenhuma informação encontrada
          </Text>
        )}
      />
    </View>
  );
}
