export default function ListItem(props) {
  const { item, handleDeleteItem } = props;

  return (
    <>
      <div key={item.itemid}>
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h1 class="card-title">{item.item.itemname}</h1>
                <p class="card-text">{item.item.itemcategory}</p>
                <p>{item.item.itemdescription}</p>
                <div>
                  <button
                    className="btn-delete"
                    onClick={() => handleDeleteItem(item.itemid)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
