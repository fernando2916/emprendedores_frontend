import { useEffect } from "react";

const Cursos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-[4rem]">
      <h1>Cursos</h1>
    </div>
  );
};

export default Cursos;
