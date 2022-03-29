import Nav from "./component/Nav";
import Card from "./component/Card";
import ReactState from "./component/ReactState"

const isiCard = [
  { gambar:"/komp1.jpg",
    title : "Souvenir Handuk",
    content : "Souvenir ini merupakan salah salah satu souvenir yang terbuat dari handuk. Perpaduan hiasan dari beberapa manik-manik membuat souvenir ini terlihat elegan."
  },

  { gambar:"/komp2.jpg",
  title : "Hantaran Pernikahan",
  content : "Hantaran pernikahan merupakan salah satu barang yang sakral dalam pernikahan. Hantaran pernikahan dapat memengaruhi kesan pertama sang mempelai. Buatlah kesan yang terbaik.  "
  },

  { gambar:"/komp3.jpg",
  title : "Paper Flower Background",
  content : "Paper Flower Background merupakan hiasan dinding yang biasanya digunakan dalam beberapa acara berkesan. Diantaranya pertunangan maupun ulang tahun "
  },

  { gambar:"/komp4.jpg",
  title : "Souvenir Gelas",
  content : "Souvenir ini merupakan salah souvenir yang sederhana. Bertema gelas kaca yang memukau karena dipadukan oleh beberapa hiasan pendukung. Buatlah kesan terbaik anda!"
  },

  { gambar:"/komp5.jpg",
  title : "Souvenir Alat Tulis",
  content : "Souvenir ini bisa menjadi salah satu alternatif yang sangat baik. Bukan hanya keindahan tetapi juga kebermanfaatan. Souvenir ini bisa menjadi salah satu pilihan."
  },

  { gambar:"/komp6.jpg",
  title : "Bucket Bunga",
  content : "Bucket Bunga adalah salah satu pilihan terbaik untuk mengado sang kekasih pujaan hati anda. Bukan hanya itu saja, bucket bunga juga bisa digunakan sebagai kado wisuda maupun ulang tahun. "
  },

  { gambar:"/komp7.jpg",
  title : "Bucket Uang",
  content : "Pilihan yang terbaik!!! "
  },

  { gambar:"/komp8.jpg",
  title : "Kado Ultah",
  content : "Bagi kalian yang bingung mencari kado untuk dia yang istimewa? Yukk Kado ultah yang disertai boneka dapat menjadi pilihan anda. Nunggu apa lagi. Langsung order disini...."
  },


];

function App() {
  return (
    <container>
      <Nav />
      <div className="row">
        {isiCard.map((agt, indeks) => (
          <div className="col-lg-3 col-md-4 col-sm-6">
            <Card gambar={agt.gambar} title={agt.title} content={agt.content} />
          </div>
        ))}
      </div>
      <hr />
      <h2>State</h2>
      <ReactState />
    </container>
  );
}

export default App;
