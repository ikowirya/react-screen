import { StyleSheet, View } from "react-native";
import Title from "../components/Title";
import Card from "../components/Card";
import Payment from "../components/Payment";
import Promotion from "../components/Promotion";
import ParentComponent from "../components/ParentComponent";
import { useEffect, useState } from "react";
import { getAccountV2, getPPOB, getPromo, getTransfer } from "../network/Api";

const HomeScreen = () => {
  const [account, setAccount] = useState();
  const [transfer, setTransfer] = useState();
  const [ppob, setPPOB] = useState();
  const [promo, setPromo] = useState();

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const data = await getAccountV2();
        setAccount(data);
      } catch (error) {
        console.error("Error fetching account data", error);
      }
    };

    const fetchTransfer = async () => {
      try {
        const data = await getTransfer();
        setTransfer(data);
      } catch (error) {
        console.error("Error fetching account data", error);
      }
    };

    const fetchPPOB = async () => {
      try {
        const data = await getPPOB();
        setPPOB(data);
      } catch (error) {
        console.error("Error fetching account data", error);
      }
    };

    const fetchPromo = async () => {
      try {
        const data = await getPromo();
        setPromo(data);
      } catch (error) {
        console.error("Error fetching account data", error);
      }
    };

    fetchAccount();
    fetchTransfer();
    fetchPPOB();
    fetchPromo();
  }, []);

  return (
    <ParentComponent>
      <View style={styles.container}>
        <Title username={account && account.user.name} />
        <Card
          balance={account && account.user.balance}
          menu={transfer && transfer.menu}
        />
        <Payment menu={ppob && ppob.list} />
        <Promotion banner={promo && promo.promos}/>
      </View>
    </ParentComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 55,
    paddingLeft: 24,
    paddingRight: 24,
  },
  image: {
    height: 850,
    resizeMode: "cover",
  },
});

export default HomeScreen;
