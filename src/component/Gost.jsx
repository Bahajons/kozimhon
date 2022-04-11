const Gost = () => {
  return (
    <div className="gost py-md-5 py-2">
      <div className="container-fluid">
        <h2 className="text-light text-center py-5">Меҳмон Спикерларимиз</h2>
        <div className="d-flex justify-content-around flex-wrap">
          <div className="col-md-5">
            <div>
              <img className="w-100 rounded-sm" src="../img/Ayubxon.png" alt="" />
              <p className="text-light pt-md-4 pt-2">Ислом молиясининг шаръий масалалари бўйича
                саволларга меҳмонимиз,
                зикр аҳлидан сўранг ҳайъати азоси Муҳаммад
                Aйюбхон домла Ҳомидов жавоб берадилар.</p>
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <img className="w-100 rounded-sm" src="../img/Mirzakarim.png" alt="" />
              <p className="text-light pt-md-4 pt-2">Шахсий ривожланиш дарсимизда
                таниқли журналист ва суҳандон
                Aбдукарим Мирзаев меҳмон бўладилар.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Gost;