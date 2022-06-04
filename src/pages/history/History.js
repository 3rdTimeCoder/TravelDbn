import React, { useState } from "react";
import "./history.css";

const History = () => {
  const [topic, setTopic] = useState("history");
  const windowSize = window.innerWidth;

  const CityHistory = () => (
    <>
      <h2>History Of EThekwini</h2>
      <p>
        Established in 1824 as the city of Durban, Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Reiciendis, consequuntur quae iste tempore
        eius laudantium nam magni a! Sequi dicta esse illum earum iusto enim
        laborum numquam ipsa debitis adipisci!
      </p>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error nostrum
        odit alias harum eum incidunt reprehenderit, eius ipsam aliquid
        adipisci, quod recusandae? Vel.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nam
        veritatis suscipit repellendus omnis inventore placeat sint eaque hic
        blanditiis voluptate, in a. Molestias minus dignissimos asperiores enim
        ea facere aliquid fuga quibusdam itaque! Ad doloremque delectus nemo
        commodi deserunt?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deserunt,
        pariatur veniam vel sapiente quaerat ullam nostrum error. Corporis
        minima, repudiandae nisi cum saepe minus illum enim esse, eos nobis
        fuga, molestias et eveniet. Sunt, odit laboriosam inventore totam eos
        itaque voluptatem nostrum? Tempore at corrupti quaerat sed placeat
        error, porro laborum excepturi quod.
      </p>
    </>
  );
  const CityCommerce = () => (
    <>
      <h2>Doing Business In Durban</h2>

      <p>
        Since the KZN Investemnt Summit in 2018, sit amet consectetur
        adipisicing elit. Error nostrum odit alias harum eum incidunt
        reprehenderit, eius ipsam aliquid adipisci, quod recusandae? Vel.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nam
        veritatis suscipit repellendus omnis inventore placeat sint eaque hic
        blanditiis voluptate, in a. Molestias minus dignissimos asperiores enim
        ea facere aliquid fuga quibusdam itaque! Ad doloremque delectus nemo
        commodi deserunt?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deserunt,
        pariatur veniam vel sapiente quaerat ullam nostrum error. Corporis
        minima, repudiandae nisi cum saepe minus illum enim esse, eos nobis
        fuga, molestias et eveniet. Sunt, odit laboriosam inventore totam eos
        itaque voluptatem nostrum? Tempore at corrupti quaerat sed placeat
        error, porro laborum excepturi quod.
      </p>
    </>
  );
  const CityCulture = () => (
    <>
      <h2>City Culture</h2>
      <p>
        As a modern cosmopolitan, EThekwini has an electic mix of people of many
        ethnicities, religions, cultures sit amet consectetur adipisicing elit.
        Error nostrum odit alias harum eum incidunt reprehenderit, eius ipsam
        aliquid adipisci, quod recusandae? Vel.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nam
        veritatis suscipit repellendus omnis inventore placeat sint eaque hic
        blanditiis voluptate, in a. Molestias minus dignissimos asperiores enim
        ea facere aliquid fuga quibusdam itaque! Ad doloremque delectus nemo
        commodi deserunt?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deserunt,
        pariatur veniam vel sapiente quaerat ullam nostrum error. Corporis
        minima, repudiandae nisi cum saepe minus illum enim esse, eos nobis
        fuga, molestias et eveniet.
      </p>
    </>
  );
  const CityFuture = () => (
    <>
      <h2>Durban 2047</h2>
      <p>
        In 2017, a plan to modernise and the city in an eco-friendly way. Amet
        consectetur adipisicing elit. Reiciendis, consequuntur quae iste tempore
        eius laudantium nam magni a! Sequi dicta esse illum earum iusto enim
        laborum numquam ipsa debitis adipisci!
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nam
        veritatis suscipit repellendus omnis inventore placeat sint eaque hic
        blanditiis voluptate, in a. Molestias minus dignissimos asperiores enim
        ea facere aliquid fuga quibusdam itaque! Ad doloremque delectus nemo
        commodi deserunt?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deserunt,
        pariatur veniam vel sapiente quaerat ullam nostrum error. Corporis
        minima, repudiandae nisi cum saepe minus illum enim esse, eos nobis
        fuga, molestias et eveniet. Sunt, odit laboriosam inventore totam eos
        itaque voluptatem nostrum? Tempore at corrupti quaerat sed placeat
        error, porro laborum excepturi quod.
      </p>
    </>
  );

  const LargerScreens = () => (
    <>
      <section className="history">
        <div className="history__wrapper">
          <article className="history__card">
            {topic === "history" ? (
              <CityHistory />
            ) : topic === "commerce" ? (
              <CityCommerce />
            ) : topic === "culture" ? (
              <CityCulture />
            ) : (
              <CityFuture />
            )}

            <footer className="history__cardFooter">
              <h4 className="first" onClick={() => setTopic("history")}>
                History
              </h4>
              <h4 onClick={() => setTopic("commerce")}>Commerce</h4>
              <h4 onClick={() => setTopic("culture")}>Culture</h4>
              <h4 className="last" onClick={() => setTopic("future")}>
                Future
              </h4>
            </footer>
          </article>

          <article className="history__imgSection">
            <div className="history__imgContainer">
              {/* // google map of Durban // */}
              <iframe
                title="Map of Durban"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221430.8438391467!2d30.85086380719117!3d-29.868399490567164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7aa0001bc61b7%3A0xcca75546c4aa6e81!2sDurban!5e0!3m2!1sen!2sza!4v1631372492477!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </article>
        </div>
      </section>
    </>
  );

  const SmallerScreens = () => (
    <>
      <section className="history">
        <div className="history__wrapper">
          <article className="history__card">
            <footer className="history__cardFooter">
              <h4 className="first" onClick={() => setTopic("history")}>
                History
              </h4>
              <h4 onClick={() => setTopic("commerce")}>Commerce</h4>
              <h4 onClick={() => setTopic("culture")}>Culture</h4>
              <h4 className="last" onClick={() => setTopic("future")}>
                Future
              </h4>
            </footer>

            {topic === "history" ? (
              <CityHistory />
            ) : topic === "commerce" ? (
              <CityCommerce />
            ) : topic === "culture" ? (
              <CityCulture />
            ) : (
              <CityFuture />
            )}
          </article>
        </div>
      </section>
    </>
  );

  return windowSize >= 1072 ? <LargerScreens /> : <SmallerScreens />;
};

export default History;
