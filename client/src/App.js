import React, { useCallback, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import DragAndDrop from "./Extra/DragAndDrop";
import Notes from "./Extra/Notes";
import Students from "./Extra/Students";
import TimeTable from "./Extra/Timetable/TimeTable";
import useWindowSize from "./hooks/useWindowSize";
const App = () => {
  const app = useRef();
  const scrollContainer = useRef();
  const size = useWindowSize();
  React.useEffect(() => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  }, [size.height]);

  const skewConfigs = React.useMemo(
    () => ({
      ease: 0.4,
      current: 0,
      previous: 0,
      rounded: 0,
    }),
    []
  );
  const skewScrolling = useCallback(() => {
    skewConfigs.current = window.scrollY;
    skewConfigs.previous +=
      (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

    const diff = skewConfigs.current - skewConfigs.rounded;
    const acceleration = diff / size.width;

    const velocity = +acceleration;
    const skew = velocity * 8;

    scrollContainer.current.style.transform = `translate3d(0,-${skewConfigs.rounded}px,0) skewY(${skew}deg)`;

    requestAnimationFrame(() => skewScrolling());
  }, [size.width, skewConfigs]);

  React.useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, [skewScrolling]);
  return (
    <div ref={app} className="bg-black text-white">
      <div className="fixed w-full top-0 z-10 right-0" >
        <Navbar appRef={app}/>
      </div>
      <div ref={scrollContainer} className="overflow-hidden">
        <div className="h-screen  bg-black text-white">
          <Home />
        </div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas omnis
        porro dignissimos voluptatibus modi, repellat libero earum tempore
        aliquid alias repudiandae, odio id numquam! Totam quos quam debitis
        tempore delectus ipsa nostrum dicta impedit velit, iste adipisci dolore
        dignissimos quia ducimus qui voluptatum mollitia et excepturi eius
        dolores est? Tempore dolores nam fuga. Harum ex debitis odit ad repellat
        similique earum hic nemo. Explicabo atque minima, eius saepe non dicta
        deserunt sit nisi, quaerat vitae consequatur tenetur? Expedita sunt
        dolore fuga quasi, ad laudantium facere est exercitationem provident
        fugiat magni dolor mollitia possimus deserunt cumque numquam
        perferendis! Eligendi magni neque atque, minima, harum cum vel ipsum,
        error quo iure eaque? Quaerat quo voluptates praesentium perspiciatis,
        harum expedita delectus qui adipisci, laudantium eligendi culpa soluta
        iusto minus magni optio cum ducimus voluptate eius perferendis. Eaque,
        quos non, quasi eius officia totam porro, dignissimos illo reiciendis
        soluta nam quisquam nihil eos at? Maiores illum ipsum molestiae nostrum
        officia ad, porro repellat voluptates iure officiis eum! Dolore vero,
        corporis quo ducimus ex doloremque voluptatibus exercitationem.
        Temporibus nihil reiciendis molestiae nesciunt harum ullam blanditiis
        dignissimos cumque laboriosam a. Cupiditate repellat esse ut animi,
        minima qui doloribus doloremque dolor quos sint asperiores nostrum,
        placeat, optio fugit illum laborum error itaque dolores quae distinctio
        assumenda adipisci quas. Nobis perspiciatis libero expedita ea
        reiciendis magnam quasi ipsam ut, dicta blanditiis impedit tempore ex
        aspernatur? Molestiae amet dolor perferendis neque obcaecati animi
        officia blanditiis cumque iure harum magni quas ratione exercitationem,
        quos eligendi quibusdam repellendus sequi. Labore optio, eligendi
        veritatis ipsam maxime voluptatibus eveniet praesentium soluta aperiam
        autem illum tempore a assumenda vel ex similique voluptatum! Dignissimos
        aut magnam recusandae mollitia, veritatis quisquam nisi! Fugiat
        perspiciatis at, amet quod sequi maiores doloremque. Voluptas ex magni,
        omnis esse vitae nemo odit accusantium perspiciatis. Itaque
        exercitationem distinctio perferendis blanditiis ipsum neque aliquid
        temporibus! Suscipit, expedita possimus? Laboriosam quae vel aliquid!
        Earum ipsum voluptatum iste? Totam repellendus itaque laborum quia
        molestias labore? Modi deleniti non vero? Dolores distinctio deleniti
        repudiandae perferendis consequatur odio dignissimos error quasi odit
        minus praesentium ratione quidem corporis similique cupiditate sed
        maiores ad officiis et accusamus, fugit iste amet qui eaque. Quod
        expedita excepturi odio nostrum eos deserunt, dolor explicabo quis
        omnis? Perferendis excepturi, fugiat at eius adipisci ullam amet est
        nesciunt quod facere porro aperiam impedit accusantium in quo sed
        repellendus ex! Quo fugiat, laudantium veniam nobis molestias cum. Sint
        expedita sed voluptates iure minima. Consectetur, unde fugit! Voluptatem
        eveniet inventore accusantium, esse ea eaque mollitia omnis quisquam
        incidunt hic deleniti dolor sit, vitae laudantium animi necessitatibus
        eos corporis aut aliquid perferendis ipsum deserunt? Veritatis eligendi
        odit neque, excepturi iusto itaque autem eius recusandae beatae suscipit
        consectetur amet impedit enim id ipsa fugiat. Adipisci aut optio dicta,
        eum sed rem suscipit eligendi commodi similique nihil officiis, minus
        atque repellendus placeat iste. Quasi dicta error voluptatibus animi
        molestiae accusamus quos totam sint, magnam iusto, consectetur aut
        inventore consequuntur est, perferendis ullam architecto repudiandae eos
        quo. Fugiat fuga, provident veritatis tempore facilis ipsam. Dolor,
        consectetur? Sit quas commodi exercitationem quasi necessitatibus? Eum
        molestiae nesciunt, deleniti vel veniam fuga eos fugit iusto maxime aut.
        Aperiam quidem corrupti reprehenderit temporibus obcaecati iure quam
        dolorum modi sequi, ut distinctio soluta quasi similique placeat sint
        vitae deleniti unde, voluptates id, inventore debitis molestiae
        molestias aut! Dolores fugiat commodi corrupti dicta enim sunt id
        doloribus quasi, hic eos eius a perspiciatis ratione asperiores sequi.
        Voluptate modi voluptas eaque tempore voluptatem! Totam repellendus
        doloribus reprehenderit, ut repellat animi laboriosam! Incidunt quos ab,
        aspernatur dolores voluptas doloremque illum, tenetur laboriosam, vel
        enim maiores laudantium. Dolorem consequatur nihil asperiores dicta
        velit nesciunt aperiam optio nobis veniam fugiat? Maiores, corrupti?
        Cumque ducimus quas veniam. Tempora, cum quibusdam. Perspiciatis
        doloremque voluptatem pariatur dolorem vitae? Omnis quasi doloremque ea,
        error unde quae temporibus vel fuga qui ducimus voluptatem natus
        deleniti. Exercitationem porro commodi ut alias cupiditate labore
        quibusdam incidunt, veniam neque vel nobis, voluptates consequatur
        distinctio totam cumque quia. Perferendis dolores voluptatem officia
        suscipit impedit quod quaerat velit deleniti, quo, odit maxime quisquam
        amet maiores quasi quia ut cupiditate. Inventore, laudantium facere.
        Cumque culpa eum molestiae in quasi exercitationem quis fugiat dolor nam
        explicabo esse quos, odit suscipit maxime consequatur ea alias rem eius
        voluptatum quia architecto. Consequatur mollitia sunt illo? Repellendus
        eligendi id ex placeat ducimus fuga amet minima totam voluptates, iusto
        enim deleniti doloribus assumenda velit itaque dignissimos pariatur?
        Numquam animi a iusto dolorem nisi eius non, harum aliquam, vitae nemo
        ut similique commodi eligendi aperiam! Odit minima delectus ea molestias
        et magnam, reprehenderit voluptates ipsa veniam debitis esse. Alias eos
        consequuntur rem est beatae, repudiandae eius, dolor minima cum harum
        asperiores, recusandae obcaecati voluptatem placeat sunt neque quo
        veritatis commodi accusamus ex esse quasi corporis necessitatibus.
        Libero quo nesciunt quasi consequuntur in magni veniam expedita
        repellendus voluptates, incidunt mollitia placeat, esse facere animi
        laudantium, amet pariatur exercitationem quas dicta accusantium
        possimus! Excepturi labore possimus nostrum amet doloribus autem nemo
        perferendis aut saepe fugit rem dignissimos perspiciatis reiciendis
        inventore, quisquam quam magnam soluta libero id, veniam iure officiis?
        Neque tempora tenetur sit, adipisci cupiditate fuga reprehenderit
        suscipit eveniet assumenda id, incidunt eaque libero? Sunt voluptates
        modi, earum magni aliquid enim, iste, at minima ipsa quas impedit! Sequi
        perspiciatis nihil odit expedita, provident enim voluptatum deserunt ab
        fugit iure molestias sapiente adipisci blanditiis, assumenda soluta
        voluptas dicta praesentium! Non animi nam eaque? Ab velit architecto
        dolorem animi impedit est, corporis placeat non tempore debitis
        exercitationem voluptates voluptatem perspiciatis nostrum maiores amet
        hic eaque eius vero magnam voluptas? Consequuntur, corporis reiciendis!
        Expedita sequi vel nam voluptatum dignissimos voluptatem asperiores a
        cupiditate repudiandae, adipisci eveniet. Natus ipsam optio minus
        deleniti obcaecati itaque ut fugit, ab ducimus vero, est impedit dolorum
        ratione velit cupiditate ullam accusantium alias architecto consequatur
        corporis dolorem officia quidem. Voluptas minus reprehenderit amet
        aliquam, illo, officia nisi quibusdam porro necessitatibus modi maxime
        exercitationem error illum, sit quia ab aliquid? Minus dolores aut vitae
        culpa aspernatur dolorem, totam excepturi at deserunt aperiam facere
        pariatur sequi, sunt, rerum velit. Iure a ratione sit commodi, in velit
        quod laborum sint.
      </div>
    </div>
  );
};

export default App;
{
  /* <Route path="notes" element={<Notes />} />
<Route path="students" element={<Students />} />
<Route path="drag" element={<DragAndDrop/>}/>
<Route path="timetable" element={<TimeTable/>}/> */
}
