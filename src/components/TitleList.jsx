const TitleList = () => {
  return (
    <div className="titleList">
      <div className="title">
        <h1>Netflix</h1>
        <div className="titles-wrapper">
          <div className="movie">
            <a href="/details/60735"
              ><img src="https://image.tmdb.org/t/p/w500/lJA2RCMfsWoskqlQhXPSLFQGXEJ.jpg" alt="Movie poster" />
              <div className="overlay">
                <div className="title">The Flash</div>
                <div className="rating">7.7/10</div>
                <div className="plot">
                  After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later
                  he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though
                  initially excited by his newfound powers, Barry is shocked to discover he is not the only "meta-human" who was created in the wake of the
                  accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to
                  protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be
                  long before the world learns what Barry Allen has become...The Flash.
                </div>
              </div></a
            >
            <div data-toggled="false" className="listToggle">
              <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
            </div>
          </div>
          <div className="movie">
            <a href="/details/93484"
              ><img src="https://image.tmdb.org/t/p/w500/9yxep7oJdkj3Pla9TD9gKflRApY.jpg" alt="Movie poster" />
              <div className="overlay">
                <div className="title">Jupiter's Legacy</div>
                <div className="rating">7.4/10</div>
                <div className="plot">
                  When the world's first generation of superheroes received their powers in the 1930s become the revered elder guard in the present, their
                  superpowered children struggle to live up to the legendary feats of their parents.
                </div>
              </div></a
            >
            <div data-toggled="true" className="listToggle">
              <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
            </div>
          </div>
          <div className="movie">
            <a href="/details/1416"
              ><img src="https://image.tmdb.org/t/p/w500/clnyhPqj1SNgpAdeSS6a6fwE6Bo.jpg" alt="Movie poster" />
              <div className="overlay">
                <div className="title">Grey's Anatomy</div>
                <div className="rating">8.2/10</div>
                <div className="plot">Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.</div>
              </div></a
            >
            <div data-toggled="true" className="listToggle">
              <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
            </div>
          </div>
          <div className="movie">
            <a href="/details/63174"
              ><img src="https://image.tmdb.org/t/p/w500/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg" alt="Movie poster" />
              <div className="overlay">
                <div className="title">Lucifer</div>
                <div className="rating">8.5/10</div>
                <div className="plot">
                  Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD
                  detective Chloe Decker to take down criminals.&nbsp;But the longer he's away from the underworld, the greater the threat that the worst of
                  humanity could escape.
                </div>
              </div></a
            >
            <div data-toggled="true" className="listToggle">
              <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
            </div>
          </div>
          <div className="movie">
            <a href="/details/79008"
              ><img src="https://image.tmdb.org/t/p/w500/34FaY8qpjBAVysSfrJ1l7nrAQaD.jpg" alt="Movie poster" />
              <div className="overlay">
                <div className="title">Luis Miguel: The Series</div>
                <div className="rating">8.1/10</div>
                <div className="plot">
                  The series dramatizes the life story of Mexican superstar singer Luis Miguel, who has captivated audiences in Latin America and beyond for
                  decades.
                </div>
              </div></a
            >
            <div data-toggled="false" className="listToggle">
              <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default TitleList;