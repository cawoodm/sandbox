import java.io.*;
import java.net.*;
// Works for Java 8
public class http {

	public static void main(String[] args) throws Exception {
		String url = args[0];
		System.out.println("Get " + url + " ...");
		System.out.println(getHTML(url));
	}

	public static String getHTML(String urlToRead) throws Exception {
		StringBuilder result = new StringBuilder();
		URL url = new URL(urlToRead);
		HttpURLConnection conn = (HttpURLConnection) url.openConnection();
		conn.setRequestMethod("GET");
		BufferedReader rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
		String line;
		while ((line = rd.readLine()) != null) {
			result.append(line);
		}
		rd.close();
		return result.toString();
	}
}
