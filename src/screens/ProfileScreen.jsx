import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  getCustomer,
  getAccount,
  getAccountV2,
  auth,
  authV2,
} from "../network/Api";
import ParentComponent from "../components/ParentComponent";

export default function ProfileScreen() {
  const [user, setUser] = useState();
  const [login, setLogin] = useState();
  const [customer, setCustomer] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(false);

  const fetchAccount = async () => {
    try {
      setLoading(true);
      const customerData = await getAccount();
      setUser(customerData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching account data", error);
      setLoading(false);
    }
  };

  const fetchAccountV2 = async () => {
    try {
      setLoading(true);
      const customerData = await getAccountV2();
      setUser(customerData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching account data", error);
      setLoading(false);
    }
  };

  const authLogin = async () => {
    try {
      setLoadingAuth(true);
      const data = await auth(userName, password);
      setLogin(data);
      setLoadingAuth(false);
    } catch (error) {
      console.error("Error fetching account data", error);
      setLoadingAuth(false);
    }
  };

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const customerData = await getCustomer();
        setCustomer(customerData);
      } catch (error) {
        console.error("Error fetching account data", error);
      }
    };
    fetchCustomer();
  }, []);

  const renderItem = ({ item }) => (
    <View>
      <Text>Name: {item.name}</Text>
      <Text>Amount: {item.amount}</Text>
      <Text style={{ marginBottom: 10 }}>Notes: {item.notes}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={customer && customer.customers}
        renderItem={renderItem}
      />
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <Button title="Klik Fetch" onPress={fetchAccount} />
      )}
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <Button title="Klik Axios" onPress={fetchAccountV2} />
      )}
      <Text>{user && user.user.name}</Text>
      <Text>{user && user.user.phone}</Text>
      <Text>{user && user.user.balance}</Text>

      <TextInput
        placeholder="Username"
        style={styles.textInput}
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      {loadingAuth ? (
        <ActivityIndicator />
      ) : (
        <Button title="Login" onPress={authLogin} />
      )}
      <Text>{login && login.token}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    padding: 24,
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignSelf: "center",
    position: "absolute",
    marginTop: 300,
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    margin: 10,
  },
});
