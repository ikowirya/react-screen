import { Text } from "react-native";

export const constants = {
  register:{
    kebijakan:
    "Saya telah menyetujui data pribadi saya dikelola oleh PT Solusi Pasti Indonesia dan partner yang bekerja sama dengan PT Solusi Pasti Indonesia untuk tujuan yang telah disebutkan di dalam.",
    banner_description:
    "Mohon masukkan nomor telepon Anda, kami akan mengirimkan kode OTP ke nomor Anda melalui WhatsApp/SMS."
  }
};

export const listImageHome = [
    {
      title: <Text style={{ color: "#852884" }}>QRIS</Text>,
      url: require("../../assets/icon_qris.png"),
    },
    {
      title: <Text style={{ color: "#852884" }}>Kirim Dana</Text>,
      url: require("../../assets/icon_kirim_dana.png"),
    },
    {
      title: <Text style={{ color: "#852884" }}>Top Up</Text>,
      url: require("../../assets/icon_topup.png"),
    },
  ];
