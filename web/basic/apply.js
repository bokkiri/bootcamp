// config.js 값을 읽어 QR 코드, 신청 링크, 마감일을 채웁니다.
(function () {
  var cfg = window.BOOTCAMP || {};
  var url = (cfg.applyUrl || "").trim();

  function qrSvg(text, color) {
    var qr = qrcode(0, "M");
    qr.addData(text);
    qr.make();
    var n = qr.getModuleCount(), quiet = 2, size = n + quiet * 2, d = "";
    for (var r = 0; r < n; r++) {
      for (var c = 0; c < n; c++) {
        if (qr.isDark(r, c)) d += "M" + (c + quiet) + " " + (r + quiet) + "h1v1h-1z";
      }
    }
    return '<svg viewBox="0 0 ' + size + " " + size + '" shape-rendering="crispEdges" role="img" aria-label="신청서 QR 코드">' +
      '<rect width="100%" height="100%" fill="#fff"/><path d="' + d + '" fill="' + (color || "#1F1D1A") + '"/></svg>';
  }

  document.querySelectorAll("[data-apply-qr]").forEach(function (el) {
    if (url) {
      el.innerHTML = qrSvg(url, el.getAttribute("data-apply-qr") || undefined);
      el.classList.remove("is-empty");
    } else {
      el.classList.add("is-empty");
      el.innerHTML = '<span>QR 자리<br><small>신청 링크 확정 후 자동 생성</small></span>';
    }
  });

  document.querySelectorAll("[data-apply-url]").forEach(function (el) {
    el.textContent = url ? url.replace(/^https?:\/\//, "") : "신청 링크 준비 중";
    if (url && el.tagName === "A") el.href = url;
  });

  document.querySelectorAll("[data-deadline]").forEach(function (el) {
    el.textContent = cfg.deadline || "○월 ○일(○)";
    if (!cfg.deadline) el.classList.add("is-empty");
  });

  document.querySelectorAll("[data-contact]").forEach(function (el) {
    el.textContent = cfg.contact || "";
  });
})();
