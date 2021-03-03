import { useState } from 'react';
import styles from './App.module.css';

function App() {

	const [companyNameArtikel, setCompanyNameArtikel] = useState("die Firma");
	const [companyName, setCompanyName] = useState("");
	const [companyAddress, setCompanyAddress] = useState("");
	const [companyPhone, setCompanyPhone] = useState("");
	const [companyMail, setCompanyMail] = useState("");

	const [isShop, setIsShop] = useState(false);
	const [hasCookies, setHasCookies] = useState(false);

	const [hasGoogleAnalytics, setHasGoogleAnalytics] = useState(false);
	const [hasGoogleFonts, setHasGoogleFonts] = useState(false);
	const [hasYoutube, setHasYoutube] = useState(false);

	const [hasFacebook, setHasFacebook] = useState(false);

	return (
		<div className={styles.container}>
			<div className={styles.column_left}>
				<a href="https://github.com/julianhandl/dsgvo-generator-at-de">Dieses Projekt auf GitHub</a>
				<h1>DSGVO Text Generator<br /><small>für Webseiten</small></h1>
				<div className={styles.field}>
					<label htmlFor="companyArtikel">Anrede des Betreibers</label><br />
					<select id="companyArtikel" defaultValue="die Firma" onChange={e => setCompanyNameArtikel(e.target.value)}>
						<option value="die Firma">die Firma</option>
						<option value="die Person">die Person</option>
					</select>
				</div>
				<div className={styles.field}>
					<label htmlFor="companyName">Name der Firma oder Person*</label><br />
					<input id="companyName" type="text" value={companyName} onChange={e => setCompanyName(e.target.value)} />
				</div>
				<div className={styles.field}>
					<label htmlFor="companyAddress">Adresse*</label><br />
					<textarea id="companyAddress" onChange={e => setCompanyAddress(e.target.value)} />
				</div>
				<div className={styles.field}>
					<label htmlFor="companyPhone">Telefon*</label><br />
					<input type="text" id="companyPhone" onChange={e => setCompanyPhone(e.target.value)} />
				</div>
				<div className={styles.field}>
					<label htmlFor="companyMail">E-Mail*</label><br />
					<input type="text" id="companyMail" onChange={e => setCompanyMail(e.target.value)} />
				</div>
				<h2>Angaben zur Webseite</h2>
				<div className={styles.field}>
					<label htmlFor="isShop">
						<input type="checkbox" id="isShop" onChange={e => setIsShop(e.target.checked)} />
						Ist die Webseite ein Webshop
					</label>
				</div>
				<h2>Cookies</h2>
				<div className={styles.field}>
					<label htmlFor="cookies">
						<input type="checkbox" id="cookies" onChange={e => setHasCookies(e.target.checked)} />
						Diese Webseite verwendet cookies (JA wenn nicht sicher)
					</label>
				</div>
				<div className={styles.field}>
					<label htmlFor="ga">
						<input type="checkbox" id="ga" onChange={e => setHasGoogleAnalytics(e.target.checked)} />
						Diese Webseite verwendet Google Analytics
					</label>
				</div>
				<div className={styles.field}>
					<label htmlFor="gf">
						<input type="checkbox" id="gf" onChange={e => setHasGoogleFonts(e.target.checked)} />
						Diese Webseite verwendet Google Fonts
					</label>
				</div>
				<div className={styles.field}>
					<label htmlFor="youtube">
						<input type="checkbox" id="youtube" onChange={e => setHasYoutube(e.target.checked)} />
						Diese Webseite verwendet Youtube
					</label>
				</div>
				<div className={styles.field}>
					<label htmlFor="facebook">
						<input type="checkbox" id="facebook" onChange={e => setHasFacebook(e.target.checked)} />
						Diese Webseite verwendet Facebook
					</label>
				</div>
			</div>
			<div className={styles.column_right}>
				<div className={styles.disclaimer}>
					<div className={styles.disclaimer_headline}>Wichtig!</div>
					<p>Die Benutzung dieser Daten erfolgt auf eine Gefahr. Sie selbst sind immer noch die letzte Instanz der Prüfung. Es wird keine Garantie für Richtigkeit und Aktualität übernommen.</p>
					<p><strong>Die IP Anonymisierung von Google MUSS verwendet werden!</strong></p>
					<p><strong>Das Einverständnis zur Verwendung von Cookies MUSS erfolgen! Dienste wie Google Analytics / Facebook / Youtube ... dürfen erst danach verwendet werden!</strong></p>
				</div>
				<h1>Datenschutzerklärung</h1>
				<div>
					<strong>{companyName}</strong>
					<div dangerouslySetInnerHTML={{ __html: companyAddress.replace(/\r?\n/g, '<br />') }}></div>
				</div>
				<p>Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.</p>
				<h2>Verantwortlicher</h2>
				<p>Verantwortlicher für die Datenverarbeitung ist {companyNameArtikel} {companyName} mit Sitz in {companyAddress.replace(/\r?\n/g, ', ')}. Sie erreichen uns telefonisch unter {companyPhone}, per Mail unter {companyMail} oder postalisch unter der Anschrift {companyAddress.replace(/\r?\n/g, ', ')}.</p>
				<h2>Datensicherheit</h2>
				<p>Wir treffen nach Maß des Art 32 DSGVO entsprechende Vorkehrungen zum Schutz Ihrer personenbezogenen Daten. Diese betreffen insbesondere den Schutz vor unerlaubtem, rechtswidrigem oder auch zufälligem Zugriff, Verarbeitung, Verlust, Verwendung und Manipulation.</p>
				<h2>Webseite</h2>
				<h3>Personenbezogene Daten, Zweck der Datenverarbeitung und Rechtsgrundlage</h3>
				<p>Personenbezogene Daten sind Angaben, die eindeutig einer Person zugeordnet werden können. Dazu gehören unter anderem Angaben wie vollständiger Name, Anschrift, E-Mail und Telefonnummer. Bei einem Besuch unserer Website werden aus technischen Gründen automatisch weitere Daten erfasst (IP-Adresse, Beginn und Ende der Sitzung, Datum und Uhrzeit der Anfrage, angesteuerte Unterseite auf unserer Webseite, Art und Version des Browsers, Betriebssystem, Referrer URL). Diese technischen Informationen können im Einzelfall personenbezogene Daten sein. Im Regelfall verwenden wir diese technischen Informationen nur, wenn dies (aus technischen Gründen) für den Betrieb und Schutz unserer Website vor Angriffen und Missbrauch erforderlich ist sowie pseudonymisiert oder anonymisiert für statistische Zwecke.</p>
				{isShop ? <p>Zum Zweck der Vertragsabwicklung werden folgende Daten auch bei uns gespeichert: Vorname, Nachname, Adresse, E-Mail, Telefonnummer, Firmenname, UID-Nummer. Die von Ihnen bereit gestellten Daten sind zur Vertragserfüllung bzw. zur Durchführung vorvertraglicher Maßnahmen und zur ordnungsgemäßen Rechnungslegung erforderlich. Ohne diese Daten können wir den Vertrag mit Ihnen nicht abschließen.</p> : null}
				<p>Wenn Sie per Anfrageformular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten (Vorname, Nachname, Adresse, Telefonnummer, E-Mail) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen sechs Monate bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
Eine Verarbeitung Ihrer personenbezogenen Daten für bestimmte Zwecke (z. B. Nutzung Ihrer E-Mail für Newsletter, Werbung) kann auch aufgrund Ihrer Einwilligung erfolgen. Sie können Ihre Einwilligung mit Wirkung für die Zukunft jederzeit widerrufen. Dies gilt auch für den Widerruf von Einwilligungserklärungen, die vor der Geltung der DSGVO, uns gegenüber erteilt worden sind. Über die Zwecke und über die Konsequenzen eines Widerrufs oder der Nichterteilung einer Einwilligung werden Sie gesondert im entsprechenden Text der Einwilligung informiert.</p>
				<p>Zur Erfüllung von Verträgen bzw. vorvertragliche Maßnahmen und darüber hinaus verarbeiten wir Ihre Daten (Vorname, Nachname, Adresse, Telefonnummer, E-Mail) gegebenenfalls, wenn es erforderlich ist, um berechtigte Interessen von uns oder Dritten zu wahren, insbesondere für folgende Zwecke:</p>
				<ul>
					<li>Beantwortung von Anfragen</li>
					<li>Technische Administration</li>
					<li>der Werbung oder Markt- und Meinungsforschung, soweit Sie der Nutzung Ihrer Daten nicht widersprochen haben</li>
					<li>der Prüfung und Optimierung von Verfahren zur Bedarfsanalyse</li>
					<li>der Weiterentwicklung von Dienstleistungen und Produkten sowie bestehenden Systemen und Prozessen</li>
					<li>statistischer Auswertungen oder der Marktanalyse</li>
					<li>der Geltendmachung rechtlicher Ansprüche & Verteidigung bei rechtlichen Streitigkeiten, die nicht unmittelbar dem Vertragsverhältnis zuzuordnen sind</li>
					<li>der Verhinderung und Aufklärung von Straftaten, soweit nicht ausschließlich zur Erfüllung gesetzlicher Vorgaben</li>
				</ul>
				{isShop ? <p>Wir weisen darauf hin, dass zum Zweck des einfacheren Einkaufsvorganges und zur späteren Vertragsabwicklung vom Webshop-Betreiber im Rahmen von Cookies die IP-Daten des Anschlussinhabers gespeichert werden, ebenso wie Name, Anschrift und Kreditkartennummer des Käufers.</p> : null}
				<p>Die Rechtsgrundlagen der Datenverarbeitung sind:</p>
				<ul>
					<li>Vertragsabwicklung gemäß Art 6 Abs 1 lit b DSGVO</li>
					<li>Ihre allfällige Einwilligung gemäß Art 6 Abs 1 lit a DSGVO</li>
					<li>berechtigtes Interesse Art 6 Abs 1 lit f DSGVO</li>
				</ul>
				<h3>Speicherdauer</h3>
				<p>Die Löschung der gespeicherten personenbezogenen Daten erfolgt, wenn Sie als Nutzer unserer Website und/oder Kunde die Einwilligung zur Speicherung widerrufen, wenn Ihre Daten zur Erfüllung des mit der Speicherung verfolgten Zwecks nicht mehr erforderlich sind und nach Ablauf der gesetzlichen Aufbewahrungspflichten bzw. nach Ablauf der Dauer allfälliger darüber hinaus andauernden Rechtsstreitigkeiten oder wenn Ihre Speicherung aus sonstigen gesetzlichen Gründen unzulässig ist bzw. wird.</p>
				{isShop ? <p>Nach Abbruch eines Einkaufsvorganges werden die bei uns gespeicherten Daten gelöscht. Im Falle eines Vertragsabschlusses werden sämtliche Daten aus dem Vertragsverhältnis bis zum Ablauf der steuerrechtlichen Aufbewahrungsfrist (7 Jahre) gespeichert.</p> : null}
				{isShop ? <p>Die Daten Name, Anschrift, gekaufte Waren und Kaufdatum werden bis zum Ablauf der Produkthaftung (10 Jahre) gespeichert.  Die Datenverarbeitung erfolgt auf Basis der gesetzlichen Bestimmungen des § 96 Abs 3 TKG sowie des Art 6 Abs 1 lit a (Einwilligung) und/oder lit b (notwendig zur Vertragserfüllung) der DSGVO.</p> : null}
				<h3>Weitergabe von Daten / Empfänger bzw. Kategorien von Empfängern</h3>
				<p>Eine Weitergabe Ihrer Daten an externe Stellen erfolgt ausschließlich im Zusammenhang mit der Vertragsabwicklung, zu Zwecken der Erfüllung gesetzlicher Vorgaben, nach denen wir zur Auskunft, Meldung oder Weitergabe von Daten verpflichtet sind oder sofern die Datenweitergabe im öffentlichen Interesse liegt oder Sie zuvor eingewilligt haben. Sie haben das Recht, eine erteilte Einwilligung mit Wirkung auf die Zukunft jederzeit zu widerrufen.</p>
				<p>Personenbezogene Daten werden von uns an die nachfolgend bezeichneten Dritten weitergegeben bzw. übermittelt:</p>
				<ul>
					<li>Verschiedene Dienstleister oder Partnerunternehmen, die uns bei der Bestellabwicklung, bei der Versorgung der Kunden mit Informationen, Werbung und bei der Bereitstellung von Dienstleistungen unterstützen, EDV Dienstleister und technische Verarbeiter (Auftragsverarbeiter gemäß Art. 28 DS-GVO). Diese Unternehmen sind verpflichtet, sämtliche Datenschutzbestimmungen einzuhalten. Für die Auftragsdatenverarbeitung gelten strenge datenschutzrechtliche Vorschriften, insbesondere dürfen diese Unternehmen die Daten ausschließlich zur Erfüllung ihrer Aufgaben in unserem Auftrag nutzen. Für die Einhaltung der datenschutzrechtlichen Vorschriften durch diese Unternehmen sind wir verantwortlich und haben wir entsprechende Auftragsverarbeitungsvereinbarungen mit den Dienstleistern geschlossen</li>
					{isShop ? <li>Übermittlung der Kreditkartendaten an die abwickelnden Bankinstitute / Zahlungsdienstleister zum Zwecke der Abbuchung des Einkaufspreises</li> : null}
					{isShop ? <li>an das von uns beauftragte Transportunternehmen/Versandunternehmen zur Zustellung der Ware sowie</li> : null}
					<li>an unseren Steuerberater zur Erfüllung unserer steuerrechtlichen Verpflichtungen</li>
				</ul>
				{hasCookies
					? <>
						<h2>Cookies</h2>
						<p>Unsere Website verwendet so genannte Cookies. Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten. Dabei handelt es sich um kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an. Wird der entsprechende Server unserer Website erneut von Ihnen aufgerufen, sendet Ihr Browser den zuvor empfangenen Cookie wieder zurück an den Server. Der Server kann dann die durch diese Prozedur erhaltenen Informationen auf verschiedene Arten auswerten. Durch Cookies können zB Werbeeinblendungen gesteuert oder das Navigieren auf einer Internetseite erleichtert werden.</p>
						<p>Wenn Sie die Nutzung von Cookies unterbinden möchten, so können Sie dies durch lokale Vornahme der Änderungen Ihrer Einstellungen in dem auf Ihrem Computer verwendeten Internetbrowser (zB Internet Explorer, Mozilla Firefox, Safari etc.) tun. Sie können Ihren Browser so einrichten, dass er Sie über das Setzen von Cookies informiert und Sie dies nur im Einzelfall erlauben. Bei der Deaktivierung von Cookies kann zur Einschränkung der Funktionalität unserer Website kommen.</p>
					</>
					: null
				}
				{hasGoogleAnalytics
					? <>
						<h3>Web-Analyse mit Google Analytics</h3>
						<p>Unsere Website verwendet Funktionen des Webanalysedienstes Google Analytics, einen Webanalysedienst der Google LLC („Google“), Amphitheatre Parkway, Mountain View, CA 94043, USA. Die dabei erfassten Daten werden auch außerhalb der EU verarbeitet. Dazu werden Cookies verwendet, die eine Analyse der Benutzung der Website durch ihre Benutzer ermöglicht. Die dadurch erzeugten Informationen werden auf den Server des Anbieters übertragen und dort gespeichert.</p>
						<p>Sie können dies verhindern, indem Sie Ihren Browser so einrichten, dass keine Cookies gespeichert werden.</p>
						<p>Im Falle der Aktivierung der IP-Anonymisierung über ihren Browser, wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt.  Dadurch ist nur mehr eine grobe Lokalisierung möglich.</p>
						<p>Die Beziehung zum Webanalyseanbieter basiert auf den Standardvertragsklauseln der EU im Rahmen des Privacy Shield Abkommens. Weitere Informationen: Google Datenschutzerklärung & Nutzungsbedingungen.</p>
						<p>Die Datenverarbeitung erfolgt auf Basis der gesetzlichen Bestimmungen des § 96 Abs 3 TKG sowie des Art 6 Abs 1 lit a (Einwilligung) und/oder lit f (berechtigtes Interesse) der DSGVO.</p>
						<p>Unser Anliegen im Sinne der DSGVO (berechtigtes Interesse) ist die Verbesserung unseres Angebotes und unseres Webauftritts. Da uns die Privatsphäre unserer Nutzer wichtig ist, werden die Nutzerdaten pseudonymisiert.</p>
					</>
					: null
				}
				{hasGoogleFonts
					? <>
						<h3>Verwendung von Google Fonts</h3>
						<p>Auf unserer Website und zur Ergänzung unsere Onlineangebotes setzen wir den Drittanbieterdienst Google Fonts ein. Dies tun wir auf Basis unserer berechtigten Interessen (Art 6 Abs 1 lit f DSGVO), z.B. unserem Interesse an der Optimierung und dem wirtschaftlichen Betrieb unserer Onlineangebote. Diesr Dienst setzen voraus, dass die die IP-Adresse der Website-Besucher wahrgenommen wird. Ohne die IP-Adresse könnten die bezogenen Inhalte nicht an ihren Browser gesendet werden.</p>
						<p>Anbieter ist die Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Deren Datenschutzrichtlinien finden Sie hier: www.google.com/policies/privacy/. Ein Opt-out wäre hier möglich: https://adssettings.google.com/authenticated</p>
					</>
					: null}
				{hasYoutube
					? <>
						<h3>Verwendung von YouTube</h3>
						<p>Auf unserer Website und zur Ergänzung unsere Onlineangebotes setzen wir den Drittanbieterdienst YouTube ein. Dies tun wir auf Basis unserer berechtigten Interessen (Art 6 Abs 1 lit f DSGVO), z.B. unserem Interesse an der Optimierung und dem wirtschaftlichen Betrieb unserer Onlineangebote. Diesr Dienst setzen voraus, dass die die IP-Adresse der Website-Besucher wahrgenommen wird. Ohne die IP-Adresse könnten die bezogenen Inhalte nicht an ihren Browser gesendet werden.</p>
						<p>Anbieter ist die Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Deren Datenschutzrichtlinien finden Sie hier: www.google.com/policies/privacy/. Ein Opt-out wäre hier möglich: https://adssettings.google.com/authenticated</p>
					</>
					: null}
				{hasFacebook
					? <>
						<h3>Verwendung von Facebook</h3>
						<p>Auf unseren Webseite verwenden wir Plugins des Unternehmens Facebook, 1601 South California Avenue, Palo Alto, CA 94304, USA. Diese Plugins erkennen Sie am Logo von Facebook oder dem "Like-Button" ("Gefällt mir“). Eine Übersicht über die Facebook-Plugins finden Sie hier:</p>
						<a href="http://developers.facebook.com/docs/plugins/">http://developers.facebook.com/docs/plugins/</a>
						<p>Sobald sie unsere Seite besuchen, wird nach Einwilligung eine direkte Verbindung durch das Plugin zwischen ihrem Browser und dem Server von Facebook hergestellt. Facebook erhält dadurch Information, dass Sie unsere Webseite mit Ihrer IP-Adresse besucht haben. Wenn Sie den „Like-Button“ anklicken und gleichzeitig in ihrem Facebook-Account eingeloggt sind, werden die Inhalte unserer Seiten mit ihrem Facebook-Account verlinken und ermöglichen es Facebook den Besuch unserer Seite Ihrem Facebook-Konto zuordnen. Wir als Anbieter der Seiten erhalten haben keine Kenntnis vom Inhalt der an Facebook übermittelten Daten sowie deren. Weitere Informationen und die Datenschutzerklärung von Facebook finden sie unter https://de-de.facebook.com/policy.php</p>
					</>
					: null}
				<h2>Ihre Rechte</h2>
				<p>Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu.</p>
				<p>Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei uns {companyMail} oder der Datenschutzbehörde beschweren.</p>
			</div>
		</div>
	);
}

export default App;
