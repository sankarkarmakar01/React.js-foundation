import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Sankar Karmakar"
        age={21}
        img="https://images.unsplash.com/photo-1771959361812-53c38a045dc3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="White Devil"
        age={99}
        img="https://images.unsplash.com/photo-1659095332109-16093b523cd2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Jane Watson"
        age={20}
        img="https://images.unsplash.com/photo-1695141306692-5d6af789538f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
};

export default App;
