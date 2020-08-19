<div><button
type="button"
className="btn ClassModalBtn col-6"
data-toggle="modal"
data-target={`#level`}
>
Level
</button>

<div
        className="modal fade"
        id={`level`}
        aria-labelledby={`levelLabel`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" id={`levelLabel`}>
                Level
              </span>     

              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <p className = "modalDesc">{Level}</p>
            </div>
          </div>
        </div>
      </div>
      </div>